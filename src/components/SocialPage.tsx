import React from 'react';
import GlassCard from './GlassCard';

const SocialPage: React.FC = () => {
  return (
    <GlassCard backgroundImage="https://picsum.photos/id/1018/1000">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Connect with Me</h1>
        <p className="text-lg text-gray-700 mb-8">
          Follow me on my social media platforms to stay updated with my latest work and projects.
        </p>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/tatemouser2024" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="w-16 h-16" />
          </a>
          <a href="https://github.com/tatemouser" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="GitHub" className="w-16 h-16" />
          </a>
          <a href="https://www.instagram.com/tate_mouser" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.worldvectorlogo.com/logos/instagram-2016-6.svg" alt="Instagram" className="w-16 h-16" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
};

export default SocialPage;
