import { RefreshCw } from 'lucide-react';

const RefreshButton = ({ onRefresh, loading, lastUpdated }) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex items-center justify-between bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 mb-6">
      <div className="text-sm text-gray-600">
        {lastUpdated ? (
          <span>Last updated: {formatTime(lastUpdated)}</span>
        ) : (
          <span>No updates yet</span>
        )}
      </div>
      <button
        onClick={onRefresh}
        disabled={loading}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw 
          size={18} 
          className={loading ? 'animate-spin' : ''} 
        />
        Refresh
      </button>
    </div>
  );
};

export default RefreshButton;
