// LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center h-full">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-blue-500"></div>
    </div>
);

export default LoadingSpinner;
