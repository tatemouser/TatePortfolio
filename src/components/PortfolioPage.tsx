import React, { useState } from 'react';
import GlassCard from './GlassCard';

interface Project {
  id: number;
  title: string;
  icon: string;
  description: string;
  bullets: string[];
  image: string[]; // Correctly using array type
}

const projects: Project[] = [
  {
    id: 1,
    title: "Swipe to Shop",
    icon: "📱",
    description: "A shopping application where users swipe to add items to their cart or discard them. Users can categorize and filter their items before making a purchase.",
    bullets: [
      "MySQL Database for data storage",
      "React Frontend for UI",
      "Node.js Backend for server logic",
      "JWT for Authentication",
      "Real-time Cart and Inventory Updates",
      "Swipe with Tinder Card Library",
      "Filter and Sort Inventory",
      "Undo Swipe Feature",
      "Keyboard Navigation Support",
      "Design for Mobile and Desktop",
      "Session Management with Tokens",
      "Error Handling and Notifications",
      "Secure API Endpoints and Protection"
    ],
    image: [
      "./PortfolioImages/swipeShop1.png",
      "./PortfolioImages/swipeShop2.png",
      "./PortfolioImages/swipeShop3.png"
    ]
  },  
  {
    id: 2,
    title: "Full SQLite DB",
    icon: "💻",
    description: "Simple db application for library management. Includes two types of users: librarian and patron. Allows for adding of items, search filtering, user management, ect.",
    bullets: ["RBAC", "SQL Injection and Password Hashing Protection", "Flask Framework", "Dummary Data Preloaded", "AJAX Dynamic Frontend", "HTML Templates", "Input Error Handling"],
    image: [
      "./PortfolioImages/sqlDB1.png",
      "./PortfolioImages/sqlDB2.png"
    ]
    },
  {
    id: 3,
    title: "Auto Correct App",
    icon: "🌐",
    description: "Java application that generates words from a 10-button numeric keyboard. Utilizing word bank data and a bigram language model, the program scores the next possible words, returning the highest. The program deploys both forward and backward conversions for numbers to words and words to numbers. The UI displays the program steps and each possible combination.",
    bullets: ["25,000 word training data", "Full Java UI", "Prediction with pairwise combinations", "Manipulating CSV Files"],
    image: [
      "./PortfolioImages/autoCorrect1.png",
      "./PortfolioImages/autoCorrect2.png"
    ]
    },
  {
    id: 4,
    title: "Find Site Emotion",
    icon: "😃",
    description: "This Java program takes a URL as input and displays a window showing the percentages of 10 emotions used throughout the text.",
    bullets: ["65,000 point training data", "Read CSV File", "Prefix node tree", "SQT UI", "Web Scraping", "Word strength scoring"],
    image: [
      "./PortfolioImages/emotion1.png"
    ]
    },
  {
    id: 5,
    title: "Match Images",
    icon: "🖼️",
    description: "Java application designed to locate items on a shelf. The program takes a sentence, searches Google to find an image, scrapes the image, cleans it with OpenCV, and finally traces the item using SurfDetector.",
    bullets: ["URL Searching", "Generate descriptor / keypoint matrix", "Homography aligning", "Packages: JSOUP / OPENCV / SWT"],
    image: [
      "./PortfolioImages/imageMatch1.png"
    ]
    },
  {
    id: 6,
    title: "MATLAB Game",
    icon: "🕹️",
    description: "Similar to the board game nine men's morris, this game expands on this idea by starting off as a tic-tac-toe game and then allowing the players to move after 6 pieces have been placed. Exact rules are listed in README.",
    bullets: ["Win condition video display", "Score counters", "Background color adjustment"],
    image: [
      "./PortfolioImages/matlab1.png"
    ]
    },
  {
    id: 7,
    title: "Pickleball Tutorial",
    icon: "🎾",
    description: "Site linking pickleball players to online resources to practice and get better.",
    bullets: [
      "Live Site: w/ Cloudflare",
      "Dynamic layout for all screen sizes.",
      "Nested trivia game overlayed on pickleball board.",
      "Nested position game showing player positioning through a live court view."
    ],
    image: [
      "./PortfolioImages/pickleball1.png",
      "./PortfolioImages/pickleball2.png",
      "./PortfolioImages/pickleball3.png"
    ]
    },
  {
    id: 8,
    title: "Spec Lawn Site",
    icon: "🌿",
    description: "Dynamic layout for all screen sizes.",
    bullets: [
      "Slider showing before and after of service.",
      "Reactive map for service area.",
      "Distinct sections for site reuse."
    ],
    image: [
      "./PortfolioImages/lawn1.png",
      "./PortfolioImages/lawn2.png"
    ]
    },
  {
    id: 9,
    title: "Spec Food Site",
    icon: "🍽️",
    description: "Dynamic layout for all screen sizes.",
    bullets: [
      "Live QR code for site",
      "Reactive map for service area.",
      "Sliding header"
    ],
    image: [
      "./PortfolioImages/food1.png",
      "./PortfolioImages/food2.png",
      "./PortfolioImages/food3.png"
    ]
    },
  {
    id: 10,
    title: "Spec Car Site",
    icon: "🚗",
    description: "In Progress",
    bullets: ["Coming soon!"],
    image: [
    ]
    },
];

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <GlassCard backgroundImage="./sky2.svg">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Portfolio</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <button
              key={project.id}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              onClick={() => setSelectedProject(project)}
            >
              <span className="text-4xl mb-2">{project.icon}</span>
              <span className="text-sm font-semibold">{project.title}</span>
            </button>
          ))}
        </div>

        {selectedProject && (
          <div className="mt-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 min-h-[500px]">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.description}</p>
            {selectedProject.image.map((image, index) => ( // Correct property access
              <img 
                key={index}
                src={image}
                alt={`${selectedProject.title} image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
            ))}
            <ul className="list-disc list-inside">
              {selectedProject.bullets.map((bullet, index) => (
                <li key={index} className="mb-1">{bullet}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </GlassCard>
  );
};

export default PortfolioPage;