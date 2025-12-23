import { AlertTriangle, Info } from 'lucide-react';

const WeatherAlerts = ({ weather, theme }) => {
  const isDark = theme === 'dark';
  
  // Check for extreme weather conditions
  const alerts = [];
  
  if (weather.main.temp > 35) {
    alerts.push({
      type: 'warning',
      message: 'Extreme heat warning! Stay hydrated and avoid prolonged sun exposure.'
    });
  }
  
  if (weather.main.temp < 0) {
    alerts.push({
      type: 'warning',
      message: 'Freezing temperatures! Dress warmly and be cautious of icy conditions.'
    });
  }
  
  if (weather.wind.speed > 15) {
    alerts.push({
      type: 'info',
      message: 'High wind speeds detected. Secure loose objects outdoors.'
    });
  }
  
  if (weather.main.humidity > 80) {
    alerts.push({
      type: 'info',
      message: 'High humidity levels. It may feel warmer than the actual temperature.'
    });
  }

  if (weather.visibility < 1000) {
    alerts.push({
      type: 'warning',
      message: 'Low visibility conditions. Drive carefully and use fog lights.'
    });
  }

  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3 mt-8">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`${
            alert.type === 'warning'
              ? isDark
                ? 'bg-yellow-900/30 border-yellow-600'
                : 'bg-yellow-50 border-yellow-400'
              : isDark
              ? 'bg-blue-900/30 border-blue-600'
              : 'bg-blue-50 border-blue-400'
          } border-2 rounded-xl p-4 flex items-start gap-3`}
        >
          {alert.type === 'warning' ? (
            <AlertTriangle
              className={isDark ? 'text-yellow-400' : 'text-yellow-600'}
              size={24}
            />
          ) : (
            <Info className={isDark ? 'text-blue-400' : 'text-blue-600'} size={24} />
          )}
          <div>
            <p
              className={`font-semibold ${
                alert.type === 'warning'
                  ? isDark
                    ? 'text-yellow-400'
                    : 'text-yellow-700'
                  : isDark
                  ? 'text-blue-400'
                  : 'text-blue-700'
              }`}
            >
              {alert.type === 'warning' ? 'Weather Alert' : 'Weather Notice'}
            </p>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              {alert.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherAlerts;
