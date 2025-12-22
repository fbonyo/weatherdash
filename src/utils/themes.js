export const themes = {
  light: {
    name: 'light',
    background: 'bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600',
    card: 'bg-white/95',
    text: 'text-gray-800',
    textSecondary: 'text-gray-600',
    textTertiary: 'text-gray-500',
    border: 'border-gray-300',
    hover: 'hover:bg-gray-50'
  },
  dark: {
    name: 'dark',
    background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    card: 'bg-gray-800/95',
    text: 'text-white',
    textSecondary: 'text-gray-300',
    textTertiary: 'text-gray-400',
    border: 'border-gray-600',
    hover: 'hover:bg-gray-700'
  }
};

export const weatherBackgrounds = {
  clear: {
    light: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400',
    dark: 'bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900'
  },
  clouds: {
    light: 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600',
    dark: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black'
  },
  rain: {
    light: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800',
    dark: 'bg-gradient-to-br from-blue-900 via-blue-950 to-black'
  },
  snow: {
    light: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300',
    dark: 'bg-gradient-to-br from-blue-950 via-gray-900 to-black'
  },
  thunderstorm: {
    light: 'bg-gradient-to-br from-gray-700 via-purple-800 to-black',
    dark: 'bg-gradient-to-br from-black via-purple-950 to-black'
  },
  default: {
    light: 'bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
  }
};

export const getWeatherBackground = (condition, theme) => {
  const conditionLower = condition?.toLowerCase() || '';
  
  if (conditionLower.includes('clear')) {
    return weatherBackgrounds.clear[theme];
  } else if (conditionLower.includes('cloud')) {
    return weatherBackgrounds.clouds[theme];
  } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return weatherBackgrounds.rain[theme];
  } else if (conditionLower.includes('snow')) {
    return weatherBackgrounds.snow[theme];
  } else if (conditionLower.includes('thunderstorm')) {
    return weatherBackgrounds.thunderstorm[theme];
  }
  
  return weatherBackgrounds.default[theme];
};

export const saveThemePreference = (theme) => {
  try {
    localStorage.setItem('weatherDashTheme', theme);
  } catch (error) {
    console.error('Error saving theme preference:', error);
  }
};

export const getThemePreference = () => {
  try {
    return localStorage.getItem('weatherDashTheme') || 'light';
  } catch (error) {
    console.error('Error loading theme preference:', error);
    return 'light';
  }
};
