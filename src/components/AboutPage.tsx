import React from 'react';
import GlassCard from './GlassCard';

const AboutPage: React.FC = () => {
  return (
    <GlassCard backgroundImage="https://picsum.photos/id/1018/1000">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
        <div className="mb-8">
          <img
            src="./public/LinkedPhoto.jpg" 
            alt="Tate Mouser"
            className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Tate Mouser
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          I am a  computer science student currently specializing in various aspects of software development and quality assurance. Based in the United States, I have a background in building unique projects for a diverse set of clients with a focus on innovation and problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Skills</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Quality Assurance</li>
              <li>Problem Solving</li>
              <li>Innovation</li>
              <li>Software Development</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Interests</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>New Technology</li>
              <li>Computer Science</li>
              <li>Project Building</li>
              <li>Client Work</li>
            </ul>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutPage;
