import SortingVisualiser from "../../components/SortingVisualiser/SortingVisualiser";
import UserControlPanel from "./userControls";

export default function SortingArraysPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <h1 className="font-mono text-3xl font-bold text-center mt-5 text-purple-500">
        Algorithm Visualizer Sandbox
      </h1>
      <hr className="border-t-2 border-gray-400 w-1/2 mx-auto mt-3" />

      {/* User controls first */}
      <UserControlPanel />

      {/* Sorting visualiser */}
      <SortingVisualiser />
    </main>
  );
}
