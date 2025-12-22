import { Cloud, Droplets, Wind, Thermometer, CloudRain, CloudSnow, CloudDrizzle, Sun, CloudFog } from 'lucide-react';
import { formatTemperature, getTemperatureUnit } from '../utils/helpers';

const WeatherCard = ({ weather, temperatureUnit, theme }) => {
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
  const tempUnit = getTemperatureUnit(temperatureUnit);
  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur rounded-2xl shadow-2xl p-8 animate-fadeIn`}>
      {/* City Name */}
      <div className="text-center mb-6">
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {weather.name}, {weather.sys.country}
        </h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} capitalize mt-1`}>{description}</p>
      </div>

      {/* Weather Icon & Temperature */}
      <div className="flex items-center justify-center mb-8 flex-wrap gap-6">
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-6">
          {getWeatherIcon(weatherCondition)}
        </div>
        <div className="text-center">
          <div className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {formatTemperature(weather.main.temp, temperatureUnit)}{tempUnit}
          </div>
          <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-lg`}>
            Feels like {formatTemperature(weather.main.feels_like, temperatureUnit)}{tempUnit}
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Humidity */}
        <div className={`${isDark ? 'bg-blue-900/50' : 'bg-blue-50'} rounded-xl p-4 flex items-center gap-3`}>
          <div className="bg-blue-500 rounded-lg p-3">
            <Droplets className="text-white" size={24} />
          </div>
          <div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Humidity</p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{weather.main.humidity}%</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className={`${isDark ? 'bg-green-900/50' : 'bg-green-50'} rounded-xl p-4 flex items-center gap-3`}>
          <div className="bg-green-500 rounded-lg p-3">
            <Wind className="text-white" size={24} />
          </div>
          <div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Wind Speed</p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{weather.wind.speed} m/s</p>
          </div>
        </div>

        {/* Pressure */}
        <div className={`${isDark ? 'bg-purple-900/50' : 'bg-purple-50'} rounded-xl p-4 flex items-center gap-3`}>
          <div className="bg-purple-500 rounded-lg p-3">
            <Thermometer className="text-white" size={24} />
          </div>
          <div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Pressure</p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{weather.main.pressure} hPa</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className={`mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} grid grid-cols-2 gap-4 text-center`}>
        <div>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Min Temp</p>
          <p className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {formatTemperature(weather.main.temp_min, temperatureUnit)}{tempUnit}
          </p>
        </div>
        <div>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Max Temp</p>
          <p className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {formatTemperature(weather.main.temp_max, temperatureUnit)}{tempUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
