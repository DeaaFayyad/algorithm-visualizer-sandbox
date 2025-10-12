"use client";

import { useState } from "react";
import Controls from "./controls";

interface UserControlsProps {
  onGenerate: () => void;
  onSelectAlgorithm: (algo: string) => void;
  selectedAlgorithm: string;
}

export default function UserControlPanel({
  onGenerate,
  onSelectAlgorithm,
  selectedAlgorithm,
}: UserControlsProps) {
  const [mode, setMode] = useState<"custom" | "random" | null>("random");
  const algorithms = ["Merge", "Quick", "Bubble", "Insertion", "Selection"];

  return (
    <main className="flex flex-col items-center py-8 space-y-8">
      <h1 className="font-mono text-3xl font-bold text-center text-purple-500">
        Array Controls
      </h1>

      {/* Mode Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setMode("custom")}
          className={`px-6 py-3 font-mono uppercase rounded-lg transition ${
            mode === "custom"
              ? "bg-red-600 text-white"
              : "bg-cyan-400 text-white hover:bg-blue-700"
          }`}
        >
          Custom Array
        </button>
        <button
          onClick={() => setMode("random")}
          className={`px-6 py-3 font-mono uppercase rounded-lg transition ${
            mode === "random"
              ? "bg-red-600 text-white"
              : "bg-cyan-400 text-white hover:bg-blue-700"
          }`}
        >
          Random Array
        </button>
      </div>

      {/* Controls from controls.tsx */}
      {mode && <Controls mode={mode} onGenerate={onGenerate} />}

      {/* Algorithm Selection */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {algorithms.map((algo) => (
          <button
            key={algo}
            onClick={() => onSelectAlgorithm(algo.toLowerCase())}
            className={`px-4 py-2 rounded-lg font-mono uppercase transition ${
              selectedAlgorithm === algo.toLowerCase()
                ? "bg-purple-500 text-white"
                : "bg-gray-700 text-white hover:bg-purple-600"
            }`}
          >
            {algo}
          </button>
        ))}
      </div>
    </main>
  );
}
