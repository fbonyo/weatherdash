const RECENT_SEARCHES_KEY = 'weatherDashRecentSearches';
const MAX_RECENT_SEARCHES = 5;

export const getRecentSearches = () => {
  try {
    const searches = localStorage.getItem(RECENT_SEARCHES_KEY);
    return searches ? JSON.parse(searches) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

export const addRecentSearch = (city) => {
  try {
    let searches = getRecentSearches();
    
    // Remove if already exists (to avoid duplicates)
    searches = searches.filter(search => search.toLowerCase() !== city.toLowerCase());
    
    // Add to beginning of array
    searches.unshift(city);
    
    // Keep only the last MAX_RECENT_SEARCHES items
    searches = searches.slice(0, MAX_RECENT_SEARCHES);
    
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches));
    return searches;
  } catch (error) {
    console.error('Error writing to localStorage:', error);
    return [];
  }
};

export const clearRecentSearches = () => {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};
