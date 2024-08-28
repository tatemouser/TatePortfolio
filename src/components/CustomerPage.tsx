import React from 'react';
import GlassCard from './GlassCard';

const CustomerPage: React.FC = () => {
  return (
    <GlassCard backgroundImage="./sky2.svg">
      <div>
        <h1 className="text-3xl font-bold">Coming Soon!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Refer to contact page if you need assistance!
        </p>
      </div>
    </GlassCard>
  );
};

export default CustomerPage;
