import { useState, useEffect, useCallback } from 'react';
import { Cloud } from 'lucide-react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastSection from './components/ForecastSection';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import RefreshButton from './components/RefreshButton';
import TemperatureToggle from './components/TemperatureToggle';
import { fetchWeatherData, fetchForecastData } from './services/weatherApi';
import { processForecastData } from './utils/helpers';
import { DEFAULT_CITY } from './utils/constants';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

  const handleSearch = useCallback(async (city) => {
    setLoading(true);
    setError(null);

    // Fetch current weather
    const { data: weatherResult, error: weatherError } = await fetchWeatherData(city);
    
    // Fetch forecast data
    const { data: forecastResult, error: forecastError } = await fetchForecastData(city);

    if (weatherError || forecastError) {
      setError(weatherError || forecastError);
      setWeatherData(null);
      setForecastData(null);
    } else {
      setWeatherData(weatherResult);
      
      // Process forecast data
      const processedForecast = processForecastData(forecastResult.list);
      setForecastData(processedForecast);
      
      setCurrentCity(city);
      setLastUpdated(new Date());
      setError(null);
    }

    setLoading(false);
  }, []);

  const handleRefresh = () => {
    if (currentCity) {
      handleSearch(currentCity);
    }
  };

  const handleTemperatureToggle = (unit) => {
    setTemperatureUnit(unit);
  };

  // Load default city on mount
  useEffect(() => {
    handleSearch(DEFAULT_CITY);
  }, [handleSearch]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCity && !loading) {
        console.log('Auto-refreshing weather data...');
        handleSearch(currentCity);
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [currentCity, loading, handleSearch]);

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

          {weatherData && !loading && (
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="flex-1">
                <RefreshButton 
                  onRefresh={handleRefresh} 
                  loading={loading}
                  lastUpdated={lastUpdated}
                />
              </div>
              <TemperatureToggle 
                unit={temperatureUnit}
                onToggle={handleTemperatureToggle}
              />
            </div>
          )}

          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          
          {weatherData && !loading && (
            <>
              <WeatherCard 
                weather={weatherData} 
                temperatureUnit={temperatureUnit}
              />
              
              {forecastData && forecastData.length > 0 && (
                <ForecastSection 
                  forecasts={forecastData}
                  temperatureUnit={temperatureUnit}
                />
              )}
            </>
          )}
        </main>

        <footer className="text-center mt-12 text-white/80">
          <p>Day 4 of 8 | 7-Day Weather Forecast Added! 📅</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
