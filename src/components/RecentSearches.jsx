import { History, X, Trash2 } from 'lucide-react';

const RecentSearches = ({ searches, onSelectCity, onClearHistory }) => {
  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <History className="text-gray-600" size={20} />
          <h3 className="text-lg font-semibold text-gray-800">Recent Searches</h3>
        </div>
        <button
          onClick={onClearHistory}
          className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Clear history"
        >
          <Trash2 size={16} />
          <span>Clear</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelectCity(city)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg"
          >
            <span className="font-medium">{city}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
