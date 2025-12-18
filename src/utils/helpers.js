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
