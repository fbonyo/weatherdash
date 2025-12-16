import { useState } from 'react';
import { Cloud, Search, AlertCircle } from 'lucide-react';

function App() {
  const [loading] = useState(false);
  const [error] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Cloud className="text-white" size={48} />
            <h1 className="text-5xl font-bold text-white">
              Weather Dashboard
            </h1>
          </div>
          <p className="text-white/90 text-lg">
            Get real-time weather information for any city worldwide
          </p>
        </header>

        <main className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for a city..."
                  disabled
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button
                disabled
                className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Search
              </button>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4">
                <Cloud className="text-white" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Welcome to Weather Dashboard! 🌤️
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Day 1: Project structure is ready!
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 text-left">
                <h3 className="font-bold text-blue-900 mb-3">✅ Today's Progress:</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Project initialized with Vite + React</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Component structure planned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>API service layer ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Beautiful UI foundation created</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p>Coming tomorrow: Search functionality & live weather data! 🚀</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center mt-12 text-white/80">
          <p>Day 1 of 8 | Building with React & OpenWeatherMap API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
