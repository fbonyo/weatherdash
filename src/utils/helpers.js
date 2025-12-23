export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

export const formatTemperature = (temp, unit) => {
  if (unit === 'fahrenheit') {
    return Math.round(celsiusToFahrenheit(temp));
  }
  return Math.round(temp);
};

export const getTemperatureUnit = (unit) => {
  return unit === 'fahrenheit' ? '°F' : '°C';
};

export const processForecastData = (forecastList) => {
  const dailyForecasts = {};
  
  forecastList.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dateKey = date.toDateString();
    
    if (!dailyForecasts[dateKey]) {
      dailyForecasts[dateKey] = {
        date: date,
        temps: [],
        conditions: [],
        humidity: [],
        windSpeed: []
      };
    }
    
    dailyForecasts[dateKey].temps.push(item.main.temp);
    dailyForecasts[dateKey].conditions.push(item.weather[0].main);
    dailyForecasts[dateKey].humidity.push(item.main.humidity);
    dailyForecasts[dateKey].windSpeed.push(item.wind.speed);
  });
  
  return Object.values(dailyForecasts)
    .slice(0, 7)
    .map(day => ({
      date: day.date,
      tempMin: Math.min(...day.temps),
      tempMax: Math.max(...day.temps),
      condition: day.conditions[Math.floor(day.conditions.length / 2)],
      humidity: Math.round(day.humidity.reduce((a, b) => a + b) / day.humidity.length),
      windSpeed: (day.windSpeed.reduce((a, b) => a + b) / day.windSpeed.length).toFixed(1)
    }));
};

export const formatTime = (timestamp, timezone) => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    timeZone: 'UTC'
  });
};

export const formatVisibility = (visibility) => {
  const km = visibility / 1000;
  return km.toFixed(1);
};

export const getWindDirection = (degree) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degree / 22.5) % 16;
  return directions[index];
};

export const getAQILevel = (aqi) => {
  if (aqi <= 50) return { level: 'Good', color: 'text-green-500' };
  if (aqi <= 100) return { level: 'Moderate', color: 'text-yellow-500' };
  if (aqi <= 150) return { level: 'Unhealthy for Sensitive', color: 'text-orange-500' };
  if (aqi <= 200) return { level: 'Unhealthy', color: 'text-red-500' };
  if (aqi <= 300) return { level: 'Very Unhealthy', color: 'text-purple-500' };
  return { level: 'Hazardous', color: 'text-red-700' };
};
