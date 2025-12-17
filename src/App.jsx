import { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchWeatherData } from './services/weatherApi';
import { DEFAULT_CITY } from './utils/constants';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    const { data, error: apiError } = await fetchWeatherData(city);

    if (apiError) {
      setError(apiError);
      setWeatherData(null);
    } else {
      setWeatherData(data);
      setError(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleSearch(DEFAULT_CITY);
  }, []);

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
          <SearchBar onSearch={handleSearch} loading={loading} />

          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {weatherData && !loading && <WeatherCard weather={weatherData} />}
        </main>

        <footer className="text-center mt-12 text-white/80">
          <p>Day 2 of 8 | Live Weather Data Working! 🎉</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
