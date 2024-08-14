import React from 'react';
import GlassCard from './GlassCard';

const ContactPage: React.FC = () => {
  return (
    <GlassCard backgroundImage="./sky2.svg">
      <div>
        <h1 className="text-3xl font-bold text-center">Contact Page</h1>
        <p className="mt-4 text-lg text-gray-700">
         A response will be sent to you within 24 hours!
        </p>

        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="mt-8"
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Message:</label>
            <textarea 
              name="message" 
              required 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button 
            type="submit" 
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit Form
          </button>
        </form>
      </div>
    </GlassCard>
  );
};

export default ContactPage;
