"use client";
import { useState } from "react";

interface ControlsProps {
  mode: "custom" | "random";
  onGenerate: () => void;
}

export default function Controls({ mode, onGenerate }: ControlsProps) {
  const [dataType, setDataType] = useState("");
  const [arraySize, setArraySize] = useState(500);
  const [customArray, setCustomArray] = useState("");

  return (
    <div className="flex flex-col gap-6 p-8 items-center">
      {/* Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-2">Variable Type:</label>
        <select
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">-- Select --</option>
          <option value="Integers">Integers</option>
          <option value="Floats">Floats</option>
          <option value="Letters">Letters</option>
        </select>
      </div>

      {/* Slider */}
      <div className="w-64">
        <label className="block text-sm font-medium mb-2">
          Array size: {arraySize}
        </label>
        <input
          type="range"
          min="2"
          max="500"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Custom Array Input */}
      {mode === "custom" && (
        <div className="flex flex-col gap-4 items-center">
          <div>
            <label className="block text-sm font-medium mb-2">Input Array:</label>
            <input
              type="text"
              value={customArray}
              onChange={(e) => setCustomArray(e.target.value)}
              placeholder="e.g. 5, 10, 3, 7"
              className="border rounded-lg p-2 w-64"
            />
          </div>
          <button
            onClick={onGenerate}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Generate Custom Array
          </button>
        </div>
      )}

      {/* Random-only button */}
      {mode === "random" && (
        <button
          onClick={onGenerate}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Generate Random Array
        </button>
      )}
    </div>
  );
}
