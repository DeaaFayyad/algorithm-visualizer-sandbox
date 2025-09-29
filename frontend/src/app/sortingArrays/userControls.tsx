"use client";

import { useState } from "react";

import Controls from "./controls";

export default function userControlPanel() {
    const [mode, setMode] = useState<"custom" | "random" | null>(null);

    return (
        <main className="flex flex-col items-center min-h-screen">
        <h1 className="font-mono text-3xl font-bold text-center mt-10 text-purple-500">
          Array Controls
        </h1>

        {/* Choice buttons */}
        <div className="flex gap-4 mt-8">
            <button
                onClick={() => setMode("custom")}
                className={`px-6 py-3 font-mono font-extrabold uppercase tracking-wide rounded-lg transition
                    ${mode === "custom" ? "bg-red-600 text-white" : "bg-cyan-400 text-white hover:bg-blue-700"}
                `}
            >
                Custom Array
            </button>

            <button
                onClick={() => setMode("random")}
                className={`px-6 py-3 font-mono font-extrabold uppercase tracking-wide rounded-lg transition
                    ${mode === "random" ? "bg-red-600 text-white" : "bg-cyan-400 text-white hover:bg-blue-700"}
                `}
            >
                Random Array
            </button>
        </div>

        {/* Controls panel */}
        {mode && <Controls mode={mode} />}
    </main>
  );
}