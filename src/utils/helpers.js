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