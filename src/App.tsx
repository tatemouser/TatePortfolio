import { useRef, useState } from "react";
import "./App.css";
import { Carousel, FunctionsRefType } from "./components/Carousel";

function App() {
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
     style={{ backgroundImage: `url('/1.svg')` }}>

      <div className="w-[80%] h-auto flex flex-col items-center mt-6">
        <h1 className="text-4xl text-white font-bold">{data[selectedCardIdx].title}</h1>
        <p className="text-xl text-white mt-2">{data[selectedCardIdx].description}</p>
      </div>
      
      <Carousel
        cardsData={data}
        setSelectedCardIdx={setSelectedCardIdx}
        rotation={false}
        rotationDuration={60}
        tilt={false}
        freeRoam={false}
        freeRoamLowerBounds={-180}
        freeRoamUpperBounds={0}
        onTitleClickHandler={onTitleClickHandler}
        startingAnimation={true}
        rotateOnScroll={true}
        drag={true}
        ref={carouselRef}
        />
        <div className="flex space-x-4 mb-6">
          <button
            onClick={handlePrev}
            className="w-56 h-24 bg-red-500 ">
            Previous
          </button>

          <button
            onClick={handleNext}
            className="w-56 h-24 bg-red-500 ">
            Next
          </button>
        </div>
    </div>
  );
}

export default App;
