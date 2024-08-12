import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef, useState } from "react";
import "./App.css";
import { Carousel, FunctionsRefType } from "./components/Carousel";
import CurvedText from "./components/CurvedText";
import AboutPage from './components/AboutPage'; 
import PortfolioPage from './components/PortfolioPage'; 
import SkillsPage from './components/SkillsPage'; 
import ContactPage from './components/ContactPage'; 
import OtherPage from './components/OtherPage'; 
import SocialPage from './components/SocialPage'; 
import CustomerPage from './components/CustomerPage'; 

function HomePage() {
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const data = [
    {
      id: "1",
      title: "Portfolio",
      description: "Past Work Experience",
      image:"/projects.svg",
      tags: ["Beach", "Relaxation", "Getaway"],
      routeTo: "some url",
    },
    {
      id: "2",
      title: "Skills",
      description: "Expertise & Abilities",
      image:"/skills.svg",
      tags: ["City", "Exploration", "Vibrant"],
    },
    {
      id: "3",
      title: "Contact",
      description: "Get in Touch",
      image:"/contact.svg",
      tags: ["Mountains", "Adventure", "Hiking"],
    },
    {
      id: "4",
      title: "Other",
      description: "Miscellaneous Information",
      image:"/other.svg",
      tags: ["Culture", "Traditions", "Immersion"],
    },
    {
      id: "5",
      title: "Blog and Socials",
      description: "Stay Connected and Updated",
      image:"/social.svg",
      tags: ["Wildlife", "Safari", "Nature"],
    },
    {
      id: "6",
      title: "Customer Portal",
      description: "Services Offered",
      image:"/globeservices.svg",
      tags: ["Food", "Culinary", "Flavors"],
    },
    {
      id: "7",
      title: "Tate Mouser",
      description: "Computer Science Student",
      image:"/campus.svg",
      tags: ["Food", "Culinary", "Flavors"],
    },
  ];
  const onTitleClickHandler = (card: {
    id: string;
    title: string;
    description: string;
    image: string;
    routeTo?: string;
  }) => {
    console.log("clicked", card);
  };
  const carouselRef = useRef<FunctionsRefType>(null);
  const handleNext = () => {
    carouselRef.current && carouselRef.current.nextCardHandler();
  };
  const handlePrev = () => {
    carouselRef.current && carouselRef.current.prevCardHandler();
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center fixed bg-cover bg-center"
     style={{ backgroundImage: `url('/13.svg')` }}>
      
      <CurvedText 
        text="Welcome to my home page, make yourself at home!"
        link="https://github.com/tatemouser"
      />

      <div className="w-[80%] h-auto flex flex-col items-center mt-6">
        <h1 className="text-6xl text-black font-bold">{data[selectedCardIdx].title}</h1>
        <p className="text-2xl text-black mt-2">{data[selectedCardIdx].description}</p>
      </div>
      
      <Carousel
        cardsData={data}
        setSelectedCardIdx={setSelectedCardIdx}
        rotation={true}
        rotationDuration={100}
        tilt={false}
        freeRoam={true}
        freeRoamLowerBounds={-3}
        freeRoamUpperBounds={3}
        onTitleClickHandler={onTitleClickHandler}
        startingAnimation={true}
        rotateOnScroll={true}
        drag={true}
        ref={carouselRef}
        />
        
      <div className="flex space-x-4 mb-8">
      <button
        onClick={handlePrev}
        className="w-56 h-24 border-4 border-black text-black text-3xl font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:scale-105">
        Previous
      </button>

      <button
        onClick={handleNext}
        className="w-56 h-24 border-4 border-black text-black text-3xl font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:scale-105">
        Next
      </button>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
