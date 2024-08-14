import React from 'react';
import GlassCard from './GlassCard';

const OtherPage: React.FC = () => {
  return (
    <GlassCard backgroundImage="./sky2.svg">
      <div>
        <h1 className="text-3xl font-bold text-center">Other Information</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Nothing to see here :)
        </p>
      </div>
    </GlassCard>
  );
};

export default OtherPage;
