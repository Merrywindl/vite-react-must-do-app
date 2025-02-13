import NavBarButton from "./NavBarButtons";
import Music from "./assets/music-solid.svg";
import Movies from "./assets/film-solid.svg";
import Games from "./assets/gamepad-solid.svg";

type NavbarProps = {
    changeBackgroundImage: (url: string) => void;
  }

export default function Navbar(props: NavbarProps) {
  const { changeBackgroundImage } = props;

  {/*const handleBackgroundChange = () => {
    const newImageUrl = "https://images8.alphacoders.com/131/thumb-1920-1310791.png"; 
    changeBackgroundImage(newImageUrl);
  };*/}

  return (
    <div className="bg-transparent p-3 border border-black border-5 d-flex justify-content-center w-100">
        <div className="bg-transparent p-3  d-flex justify-content-center w-75">
            <NavBarButton icon={Movies} onClick={() => alert("Coming Soon")}/>
            <NavBarButton icon={Music} onClick={() => alert("Coming Soon")}/>        
            <NavBarButton icon={Games} onClick={() => alert("Coming Soon")}/>
            {/*<NavBarButton onClick={handleBackgroundChange} icon={"https://example.com/icon.png"} /> */}
            
        </div>
        <div className="bg-transparent p-3  border-5 d-flex justify-content-left  w-50">
        <NavBarButton icon={Games} onClick={() => alert("Coming Soon")}/>
            </div>
        
    </div>
  );
}

