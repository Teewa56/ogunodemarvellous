import Terminal from "./components/terminal"
import "./App.css"

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle,rgb(0,0,0)_0%,rgb(1,50,32)_50%,rgb(1,50,32)_100%)] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div className="w-full max-w-md mx-auto aspect-square">
            <div className="inset-0 bg-gradient-to-br from-terminal-accent/20 to-terminal-prompt/20 rounded-2xl animate-pulse"></div>
            <div className="w-full h-full flex items-center justify-center bg-card/30 backdrop-blur-sm rounded-2xl border-2 border-gray-400">
              <div className="text-center p-8 text-green-900 font-semibold">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-terminal-accent to-terminal-prompt flex items-center justify-center text-6xl font-bold text-white">
                  <img src="/my-pic-vs.png" className="rounded-full" alt="image" />
                </div>
                <h2 className="text-2xl font-bold text-terminal-accent mb-2">Marvellous Ogunode</h2>
                <p className="text-terminal-command font-semibold text-xl">Programmer 🧑‍💻</p>
                <p className="text-terminal-command font-semibold text-xs">Loves building cool stuff with code.</p>
                <p className="text-terminal-command font-semibold text-xs">Enjoys coding 🧑‍💻 and thinking 🤔.</p>
                <p className="text-terminal-command font-semibold text-xs">📍 Based in Akure, Nigeria.</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Terminal />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App