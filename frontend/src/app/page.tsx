export default function Home() {
  return (
  <main className="flex flex-col items-center min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/wallpaper.jpg')" }}
  >
    <h1 className="font-mono text-6xl font-bold text-center mt-55 text-purple-500">
      Algorithm Visualizer Sandbox
    </h1>
    <a
      href="/visualise"
      className="mt-8 px-6 py-3 bg-cyan-400 text-white font-mono font-extrabold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition"
    >
      Start Visualising Now!
    </a>
  </main>
  );
}