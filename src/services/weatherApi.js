import axios from 'axios';
import { API_KEY, API_BASE_URL } from '../utils/constants';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { 
      data: null, 
      error: error.response?.data?.message || 'Failed to fetch weather data' 
    };
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { 
      data: null, 
      error: error.response?.data?.message || 'Failed to fetch forecast data' 
    };
  }
};