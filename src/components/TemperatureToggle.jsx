import { Thermometer } from 'lucide-react';

const TemperatureToggle = ({ unit, onToggle, theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-2 ${isDark ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-xl shadow-lg p-3 mb-6`}>
      <Thermometer size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mr-2`}>Temperature:</span>
      <div className={`flex ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-1`}>
        <button
          onClick={() => onToggle('celsius')}
          className={`px-4 py-1 rounded-md font-semibold transition-colors ${
            unit === 'celsius'
              ? 'bg-blue-500 text-white'
              : isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          °C
        </button>
        <button
          onClick={() => onToggle('fahrenheit')}
          className={`px-4 py-1 rounded-md font-semibold transition-colors ${
            unit === 'fahrenheit'
              ? 'bg-blue-500 text-white'
              : isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default TemperatureToggle;
