import { Container} from "react-bootstrap";
import BannerArea from "./components/BannerArea";
import Points from "./components/Points";
import TectSection from "./components/TextSection";
import CardsSection from "./components/CardsSection";
import "./css/style.css";

function App() {

  return (

    <Container>      
      <BannerArea />
	    <Points />
	    <TectSection />
	    <CardsSection />
    </Container>
    
  )
}

export default App
