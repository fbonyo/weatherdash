import { Cloud, CloudRain, CloudSnow, CloudDrizzle, Sun, CloudFog, Droplets, Wind } from 'lucide-react';
import { formatTemperature, getTemperatureUnit } from '../utils/helpers';

const ForecastCard = ({ forecast, temperatureUnit }) => {
  const getWeatherIcon = (condition) => {
    const iconProps = { size: 40, className: "text-blue-500" };
    
    if (condition.includes('Rain')) return <CloudRain {...iconProps} />;
    if (condition.includes('Snow')) return <CloudSnow {...iconProps} />;
    if (condition.includes('Drizzle')) return <CloudDrizzle {...iconProps} />;
    if (condition.includes('Clear')) return <Sun {...iconProps} className="text-yellow-500" />;
    if (condition.includes('Fog') || condition.includes('Mist')) return <CloudFog {...iconProps} />;
    return <Cloud {...iconProps} />;
  };

  const formatDate = (date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }
  };

  const tempUnit = getTemperatureUnit(temperatureUnit);

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 min-w-[200px] flex-shrink-0 hover:shadow-xl transition-shadow">
      {/* Date */}
      <div className="text-center mb-3">
        <p className="font-bold text-gray-800 text-lg">{formatDate(forecast.date)}</p>
      </div>

      {/* Weather Icon */}
      <div className="flex justify-center mb-3">
        <div className="bg-blue-50 rounded-full p-3">
          {getWeatherIcon(forecast.condition)}
        </div>
      </div>

      {/* Condition */}
      <p className="text-center text-gray-600 text-sm mb-3 font-medium">{forecast.condition}</p>

      {/* Temperature */}
      <div className="flex justify-center gap-3 mb-4">
        <div className="text-center">
          <p className="text-xs text-gray-500">High</p>
          <p className="text-xl font-bold text-red-500">
            {formatTemperature(forecast.tempMax, temperatureUnit)}{tempUnit}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Low</p>
          <p className="text-xl font-bold text-blue-500">
            {formatTemperature(forecast.tempMin, temperatureUnit)}{tempUnit}
          </p>
        </div>
      </div>

      {/* Additional Details */}
      <div className="border-t pt-3 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <Droplets size={16} />
            <span>Humidity</span>
          </div>
          <span className="font-semibold text-gray-800">{forecast.humidity}%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <Wind size={16} />
            <span>Wind</span>
          </div>
          <span className="font-semibold text-gray-800">{forecast.windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;