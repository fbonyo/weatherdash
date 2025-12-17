import { Cloud, Droplets, Wind, Thermometer, CloudRain, CloudSnow, CloudDrizzle, Sun, CloudFog } from 'lucide-react';

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (condition) => {
    const iconProps = { size: 64, className: "text-white" };
    
    if (condition.includes('rain')) return <CloudRain {...iconProps} />;
    if (condition.includes('snow')) return <CloudSnow {...iconProps} />;
    if (condition.includes('drizzle')) return <CloudDrizzle {...iconProps} />;
    if (condition.includes('clear')) return <Sun {...iconProps} />;
    if (condition.includes('fog') || condition.includes('mist')) return <CloudFog {...iconProps} />;
    return <Cloud {...iconProps} />;
  };

  const weatherCondition = weather.weather[0].main.toLowerCase();
  const description = weather.weather[0].description;

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
      {/* City Name */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="text-gray-500 capitalize mt-1">{description}</p>
      </div>

      {/* Weather Icon & Temperature */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-6 mr-6">
          {getWeatherIcon(weatherCondition)}
        </div>
        <div>
          <div className="text-6xl font-bold text-gray-800">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="text-gray-500 text-lg">
            Feels like {Math.round(weather.main.feels_like)}°C
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Humidity */}
        <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
          <div className="bg-blue-500 rounded-lg p-3">
            <Droplets className="text-white" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Humidity</p>
            <p className="text-2xl font-bold text-gray-800">{weather.main.humidity}%</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
          <div className="bg-green-500 rounded-lg p-3">
            <Wind className="text-white" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Wind Speed</p>
            <p className="text-2xl font-bold text-gray-800">{weather.wind.speed} m/s</p>
          </div>
        </div>

        {/* Pressure */}
        <div className="bg-purple-50 rounded-xl p-4 flex items-center gap-3">
          <div className="bg-purple-500 rounded-lg p-3">
            <Thermometer className="text-white" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Pressure</p>
            <p className="text-2xl font-bold text-gray-800">{weather.main.pressure} hPa</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-gray-500 text-sm">Min Temp</p>
          <p className="text-xl font-semibold text-gray-800">{Math.round(weather.main.temp_min)}°C</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Max Temp</p>
          <p className="text-xl font-semibold text-gray-800">{Math.round(weather.main.temp_max)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
