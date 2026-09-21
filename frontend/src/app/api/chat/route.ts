import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: string;
  content: string;
}

const SYSTEM_INSTRUCTION =
  "You are a professional legal assistant for the IP Shakti Sahayak platform. You answer questions, provide legal information, and help users navigate Indian intellectual property laws, patent regulations (Patents Act, 1970), Biological Diversity Act (2002), TKDL, and compliance concepts for Ayurvedic and herbal formulations. Do not give binding legal advice, but provide structured, objective, and clear guidance based on Indian regulatory frameworks.";

async function callGeminiRest(
  apiKey: string,
  model: string,
  systemInstruction: string,
  contents: Array<{ role: string; parts: Array<{ text: string }> }>
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: systemInstruction }],
      },
      contents,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API returned ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  const candidate = data.candidates?.[0];
  const parts = candidate?.content?.parts || [];

  // Filter for actual response text, excluding thinking parts if present
  const textParts = parts
    .filter((p: { text?: string; thought?: boolean }) => p.text && !p.thought)
    .map((p: { text?: string }) => p.text);

  const text =
    textParts.length > 0
      ? textParts.join("\n")
      : parts.map((p: { text?: string }) => p.text || "").join("\n").trim();

  if (!text) {
    throw new Error("No text returned by Gemini API candidate.");
  }

  return text;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const rawMessages: ChatMessage[] = body.messages || [];

    if (!rawMessages || rawMessages.length === 0) {
      return NextResponse.json(
        { detail: "Messages list cannot be empty." },
        { status: 400 }
      );
    }

    // Attempt backend forwarding if configured or running in development
    const backendUrl =
      process.env.BACKEND_API_URL ||
      (process.env.NEXT_PUBLIC_API_URL &&
      !process.env.NEXT_PUBLIC_API_URL.includes("localhost") &&
      !process.env.NEXT_PUBLIC_API_URL.includes("127.0.0.1")
        ? process.env.NEXT_PUBLIC_API_URL
        : null) ||
      (process.env.NODE_ENV === "development" ? "http://localhost:8000" : null);

    if (backendUrl) {
      try {
        const backendRes = await fetch(`${backendUrl}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: rawMessages }),
        });

        if (backendRes.ok) {
          const backendData = await backendRes.json();
          return NextResponse.json(backendData);
        }
        console.warn(
          `Backend at ${backendUrl} returned status ${backendRes.status}. Falling back to serverless Gemini...`
        );
      } catch (backendError) {
        console.warn(
          `Could not connect to backend at ${backendUrl}. Falling back to serverless Gemini:`,
          backendError
        );
      }
    }

    // Direct Gemini execution (ideal for Vercel and serverless deployments)
    let geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      try {
        const fs = await import("fs");
        const path = await import("path");
        const backendEnvPath = path.resolve(process.cwd(), "..", "backend", ".env");
        if (fs.existsSync(backendEnvPath)) {
          const content = fs.readFileSync(backendEnvPath, "utf-8");
          const m = content.match(/GEMINI_API_KEY=([^\r\n]+)/);
          if (m) geminiApiKey = m[1].trim();
        }
      } catch {
        // ignore in cloud environments where fs is restricted
      }
    }

    if (!geminiApiKey) {
      return NextResponse.json(
        {
          detail:
            "GEMINI_API_KEY is not configured on the server. Please set GEMINI_API_KEY in your deployment environment variables.",
        },
        { status: 503 }
      );
    }

    // Prepare contents: filter initial greeting and error messages
    const filteredMessages = rawMessages.filter((msg) => {
      const trimmed = msg.content.trim();
      return (
        trimmed.length > 0 &&
        !trimmed.startsWith("Hello! I am your AI Legal Assistant") &&
        !trimmed.startsWith("Sorry, I encountered an error") &&
        !trimmed.startsWith("Unable to connect to AI assistant")
      );
    });

    if (filteredMessages.length === 0) {
      return NextResponse.json(
        { detail: "No valid user messages found." },
        { status: 400 }
      );
    }

    // Convert to Gemini format with alternating turns starting with 'user'
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    for (const msg of filteredMessages) {
      const geminiRole = msg.role === "assistant" ? "model" : "user";
      // Ensure conversation begins with 'user'
      if (contents.length === 0 && geminiRole !== "user") {
        continue;
      }
      // Avoid consecutive duplicate roles
      if (contents.length > 0 && contents[contents.length - 1].role === geminiRole) {
        contents[contents.length - 1].parts[0].text += `\n\n${msg.content}`;
      } else {
        contents.push({
          role: geminiRole,
          parts: [{ text: msg.content }],
        });
      }
    }

    if (contents.length === 0) {
      return NextResponse.json(
        { detail: "No user message found to start conversation." },
        { status: 400 }
      );
    }

    // Try primary and fallback models (gemini-3.5-flash-lite is highly available and fast for conversational Q&A)
    const models = ["gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-flash-latest"];
    let lastError: unknown = null;

    for (const model of models) {
      try {
        const text = await callGeminiRest(
          geminiApiKey,
          model,
          SYSTEM_INSTRUCTION,
          contents
        );
        return NextResponse.json({
          role: "assistant",
          content: text,
        });
      } catch (err) {
        console.warn(`Model ${model} failed:`, err);
        lastError = err;
      }
    }

    return NextResponse.json(
      {
        detail: `Failed to generate response across all models. Last error: ${String(lastError)}`,
      },
      { status: 500 }
    );
  } catch (err) {
    console.error("Chat route handler error:", err);
    return NextResponse.json(
      { detail: `Internal server error: ${String(err)}` },
      { status: 500 }
    );
  }
}
