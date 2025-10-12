"use client";
import { useState } from "react";
import SortingVisualizer from "src/components/SortingVisualiser/SortingVisualiser";
import UserControls from "src/app/sortingArrays/userControls";

export default function SortingArraysPage() {
  const [triggerReset, setTriggerReset] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  return (
    <main className="flex flex-col items-center py-8 space-y-10">
      <h1 className="font-mono text-4xl font-bold text-center text-purple-500">
        Algorithm Visualizer Sandbox
      </h1>

      <UserControls
        onGenerate={() => setTriggerReset(prev => !prev)}
        onSelectAlgorithm={setSelectedAlgorithm}
        selectedAlgorithm={selectedAlgorithm}
      />

      <SortingVisualizer
        resetTrigger={triggerReset}
        algorithm={selectedAlgorithm}
      />
    </main>
  );
}
