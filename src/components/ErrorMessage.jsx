import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 border-2 border-red-400 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3 mb-8">
      <AlertCircle size={24} />
      <div>
        <p className="font-semibold">Error</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
