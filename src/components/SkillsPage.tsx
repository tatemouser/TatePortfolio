import React from 'react';
import GlassCard from './GlassCard';

const SkillsPage: React.FC = () => {
  return (
    <GlassCard backgroundImage="https://picsum.photos/id/1018/1000">
      <div>
        <h1 className="text-3xl font-bold">Info Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is some information about our services.
        </p>
      </div>
    </GlassCard>
  );
};

export default SkillsPage;
