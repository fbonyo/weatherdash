import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, loading, theme }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const isDark = theme === 'dark';

  return (
    <form onSubmit={handleSubmit} className={`${isDark ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur rounded-2xl shadow-2xl p-8 mb-8`}>
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} size={20} />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search for a city..."
            disabled={loading}
            className={`w-full pl-12 pr-4 py-3 border-2 ${isDark ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-800'} rounded-xl focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !city.trim()}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
