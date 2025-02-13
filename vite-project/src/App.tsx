import  { useState } from "react";
import ListField from "./ListField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SlideView from "./SlideView";
import Rightinfobar from "./rightinfobar";
import thumbnailImage from "./assets/Suzume.jpg"
import thumbnailImage2 from "./assets/weatheringwithyou.jpg"
import thumbnailImage3 from "./assets/yourname.jpg"
import thumbnailImage4 from "./assets/COMING-SOON-.jpg"



const testSlides = [
  {
      id:0,        
      text: "Suzume",
      image: thumbnailImage,
      story: "abc"

  },
  {
      id:1,        
      text:"Weathering With You",
      image: thumbnailImage2,
      story: "def"
      

  },
  {
      id:2,        
      text:"Your Name",
      image: thumbnailImage3,
      story: "ghi",
      

  },
  {
      id:3,        
      text:"Coming Soon",
      image: thumbnailImage4,
      story: "jkl"
  },
  {
      id:4,        
      text:"Coming Soon",
      image: thumbnailImage4,
      story: "mno"
  },
  {
      id:5,        
      text:"Coming Soon",
      image: thumbnailImage4,
      story: "pqr"
      
  }
  

]

export default function App() {
  
  const [selectedSlideId, setSelectedSlideId] = useState(3)

  const [backgroundImage, setBackgroundImage] = useState('');//future background change option

  const changeBackgroundImage = (url: string) => {
    setBackgroundImage(url);
  };

  // Applying the background image to the body
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = 'fit'; //  makes the background cover the whole body

  const selectedSlide = testSlides.find(s => s.id === selectedSlideId);

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar changeBackgroundImage={changeBackgroundImage} />
      <ListField />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <SlideView slides={testSlides}selectedSlideId={selectedSlideId} setSelectedSlideId={setSelectedSlideId}/>
        <Rightinfobar slide={selectedSlide}/>
      </div>
    </div>
  );
}