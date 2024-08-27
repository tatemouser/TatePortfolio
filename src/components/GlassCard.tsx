import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GlassCardProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ backgroundImage, children }) => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          <button 
            onClick={() => navigate(-1)} 
            className="absolute top-4 left-4 px-4 py-2 bg-white bg-opacity-20 rounded-full text-gray-800 font-semibold transition-all duration-300 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            style={{ backdropFilter: 'blur(5px)' }}
          >
            ← Back
          </button>
          <div className="max-w-md mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;