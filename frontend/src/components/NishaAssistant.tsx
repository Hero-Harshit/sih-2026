"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GenericChat from "./GenericChat";

export default function NishaAssistant() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const blobRef = useRef<HTMLDivElement>(null);
  const dragInfo = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0, moved: false });

  useEffect(() => {
    // Initialize in the bottom right corner
    setPos({
      x: window.innerWidth - 160,
      y: window.innerHeight - 160,
    });
    setIsMounted(true);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragInfo.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: pos.x,
      initialY: pos.y,
      moved: false,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;

    const dx = e.clientX - dragInfo.current.startX;
    const dy = e.clientY - dragInfo.current.startY;

    // If moved more than 5 pixels, consider it a drag
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      dragInfo.current.moved = true;
      if (!isDragging) setIsDragging(true);

      const minX = 0; // Float over sidebar
      const minY = 73; // Header height
      const maxX = window.innerWidth - 160;
      const maxY = window.innerHeight - 160;

      const newX = Math.min(Math.max(dragInfo.current.initialX + dx, minX), maxX);
      const newY = Math.min(Math.max(dragInfo.current.initialY + dy, minY), maxY);

      setPos({ x: newX, y: newY });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);

    if (!dragInfo.current.moved) {
      setIsOpen(!isOpen);
    }
  };

  if (!isMounted) return null;

  // Calculate modal position to open near the blob
  let modalStyle: React.CSSProperties = {};
  if (typeof window !== "undefined") {
    const modalWidth = window.innerWidth >= 640 ? 400 : window.innerWidth * 0.9;
    const modalHeight = Math.min(600, window.innerHeight * 0.8);

    // Default: try to open it to the top-left of the blob
    let mLeft = pos.x - modalWidth - 16;
    let mTop = pos.y - modalHeight + 64;

    // If not enough space on the left, put it on the right
    if (mLeft < 0) {
      mLeft = pos.x + 64 + 16;
    }

    // If not enough space on top, push it down
    if (mTop < 73) {
      mTop = Math.max(73, pos.y - modalHeight / 2);
    }

    // Ensure it doesn't overflow bottom
    if (mTop + modalHeight > window.innerHeight - 16) {
      mTop = window.innerHeight - modalHeight - 16;
    }

    // Ensure it doesn't overflow right
    if (mLeft + modalWidth > window.innerWidth - 16) {
      mLeft = window.innerWidth - modalWidth - 16;
    }

    // On mobile screens, just center it
    if (window.innerWidth < 640) {
      mLeft = (window.innerWidth - modalWidth) / 2;
      mTop = (window.innerHeight - modalHeight) / 2;
    }

    modalStyle = {
      left: `${mLeft}px`,
      top: `${mTop}px`,
    };
  }

  return (
    <>
      {/* Floating Blob */}
      <div
        ref={blobRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          left: pos.x,
          top: pos.y,
          touchAction: "none",
        }}
        className={`fixed z-[9999] flex items-center justify-center w-[160px] h-[160px] cursor-grab active:cursor-grabbing transition-transform select-none drop-shadow-xl ${
          isDragging ? "scale-110" : "hover:scale-105"
        }`}
      >
        <div className="relative w-full h-full select-none pointer-events-none">
          <Image
            src="/nisha.png"
            alt="Nisha AI"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Chat Modal Popover */}
      {isOpen && (
        <div
          className="fixed z-[9998] w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] flex flex-col rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-brand-200 dark:border-zinc-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          style={modalStyle}
        >
          {/* Modal Header */}
          <div className="flex items-center p-4 border-b border-slate-100 dark:border-zinc-800 bg-brand-50/50 dark:bg-zinc-900/50 backdrop-blur-md">
            <div className="w-full min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                NISHA
              </h3>
              <p className="text-[10px] tracking-wider text-slate-500 dark:text-slate-400 font-bold whitespace-nowrap truncate w-full">
                NEURAL INTERFACE for SMART HUMAN ASSISTANCE
              </p>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-hidden relative flex flex-col">
            <GenericChat isModal={true} />
          </div>
        </div>
      )}
    </>
  );
}
