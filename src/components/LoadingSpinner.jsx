import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <Loader2 className="animate-spin text-white mb-4" size={48} />
      <p className="text-white text-lg">Fetching weather data...</p>
    </div>
  );
};

export default LoadingSpinner;
