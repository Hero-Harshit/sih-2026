import { NextRequest, NextResponse } from "next/server";

const languageMap: Record<string, string> = {
  en: "English",
  hi: "Hindi",
  mr: "Marathi",
  ta: "Tamil",
  te: "Telugu",
  bn: "Bengali",
  kn: "Kannada",
  sa: "Sanskrit",
  gu: "Gujarati",
};

export async function POST(req: NextRequest) {
  try {
    const { reportData, language } = await req.json();

    if (!reportData || !language) {
      return NextResponse.json({ detail: "Missing reportData or language." }, { status: 400 });
    }

    if (language === "en") {
      return NextResponse.json(reportData);
    }

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
        // ignore
      }
    }

    if (!geminiApiKey) {
      return NextResponse.json(
        { detail: "GEMINI_API_KEY is not configured on the server." },
        { status: 503 }
      );
    }

    const langName = languageMap[language] || language;
    const systemInstruction = `You are a professional legal translation assistant. Translate the following JSON object into ${langName}. 
Keep the exact same JSON keys and structure. ONLY translate the string values. DO NOT translate the 'riskScore'.
Return ONLY valid JSON without any markdown formatting block like \`\`\`json.`;

    const contents = [
      {
        role: "user",
        parts: [{ text: JSON.stringify(reportData) }],
      },
    ];

    // Using gemini-3.5-flash-lite as it's typically faster for such tasks
    const models = ["gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-flash-latest", "gemini-1.5-flash"];
    let lastError: unknown = null;
    let text = "";

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`;
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

        const textParts = parts
          .filter((p: { text?: string; thought?: boolean }) => p.text && !p.thought)
          .map((p: { text?: string }) => p.text);

        text = textParts.length > 0
            ? textParts.join("\n")
            : parts.map((p: { text?: string }) => p.text || "").join("\n").trim();

        if (text) {
          break; // successfully got text
        }
      } catch (err) {
        console.warn(`Model ${model} failed:`, err);
        lastError = err;
      }
    }

    if (!text) {
      throw new Error(`Failed to generate response across all models. Last error: ${String(lastError)}`);
    }

    // strip markdown json block if any
    text = text.replace(/^```json/im, '').replace(/```$/im, '').trim();

    const translatedData = JSON.parse(text);
    return NextResponse.json(translatedData);

  } catch (err) {
    console.error("Translate route handler error:", err);
    return NextResponse.json(
      { detail: `Internal server error: ${String(err)}` },
      { status: 500 }
    );
  }
}
