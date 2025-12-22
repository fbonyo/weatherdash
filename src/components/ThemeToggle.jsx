import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-xl shadow-lg p-3 hover:shadow-xl transition-all"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <>
          <Moon size={20} className="text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Dark</span>
        </>
      ) : (
        <>
          <Sun size={20} className="text-yellow-500" />
          <span className="text-sm font-medium text-gray-200">Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
