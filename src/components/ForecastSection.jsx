import { Calendar } from 'lucide-react';
import ForecastCard from './ForecastCard';

const ForecastSection = ({ forecasts, temperatureUnit }) => {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 mt-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-3">
          <Calendar className="text-white" size={28} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">7-Day Forecast</h2>
      </div>

      {/* Forecast Cards - Horizontal Scroll */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4">
          {forecasts.map((forecast, index) => (
            <ForecastCard 
              key={index} 
              forecast={forecast} 
              temperatureUnit={temperatureUnit}
            />
          ))}
        </div>
      </div>

      {/* Scroll Hint for Mobile */}
      <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
        ← Swipe to see more days →
      </p>
    </div>
  );
};

export default ForecastSection;