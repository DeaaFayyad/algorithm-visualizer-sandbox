export default function SelectorPage() {
    return (
      <main className="flex flex-col items-center min-h-screen">
        <h1 className="font-mono text-3xl font-bold text-center mt-5 text-purple-500">
          Algorithm Visualizer Sandbox
        </h1>
        <hr className="border-t-2 border-gray-400 w-1/2 mx-auto mt-3" />
        <a
      href="/sortingArrays"
      className="mt-8 px-6 py-3 bg-cyan-400 text-white font-mono font-extrabold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition"
    >
      Array Sorting
      </a>
      </main>
    );
  }