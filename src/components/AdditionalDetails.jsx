import { Sunrise, Sunset, Eye, Navigation, Gauge } from 'lucide-react';
import { formatTime, formatVisibility, getWindDirection } from '../utils/helpers';

const AdditionalDetails = ({ weather, theme }) => {
  const isDark = theme === 'dark';
  
  const sunrise = formatTime(weather.sys.sunrise, weather.timezone);
  const sunset = formatTime(weather.sys.sunset, weather.timezone);
  const visibility = formatVisibility(weather.visibility);
  const windDirection = getWindDirection(weather.wind.deg);

  const detailCards = [
    {
      icon: <Sunrise size={24} />,
      label: 'Sunrise',
      value: sunrise,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Sunset size={24} />,
      label: 'Sunset',
      value: sunset,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Eye size={24} />,
      label: 'Visibility',
      value: `${visibility} km`,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Navigation size={24} />,
      label: 'Wind Direction',
      value: windDirection,
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: <Gauge size={24} />,
      label: 'Feels Like',
      value: `${Math.round(weather.main.feels_like)}°C`,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className={`${isDark ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur rounded-2xl shadow-2xl p-8 mt-8`}>
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
        Additional Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {detailCards.map((detail, index) => (
          <div
            key={index}
            className={`${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-shadow`}
          >
            <div className={`bg-gradient-to-br ${detail.color} rounded-lg p-3`}>
              <div className="text-white">{detail.icon}</div>
            </div>
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {detail.label}
              </p>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {detail.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cloud Coverage */}
      {weather.clouds && (
        <div className={`mt-4 p-4 ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-xl`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Cloud Coverage
            </span>
            <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {weather.clouds.all}%
            </span>
          </div>
          <div className={`w-full ${isDark ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-3`}>
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${weather.clouds.all}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdditionalDetails;
