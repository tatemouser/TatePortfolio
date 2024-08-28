import React from 'react';
import GlassCard from './GlassCard';

const SkillsPage: React.FC = () => {
  return (
    <GlassCard backgroundImage="./sky2.svg">
      <div>
        <h1 className="text-3xl font-bold">Nothing to see here!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Page coming soon, check back tomorrow!
        </p>
      </div>
    </GlassCard>
  );
};

export default SkillsPage;
