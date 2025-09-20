import { Container} from "react-bootstrap";
import BannerArea from "./BannerArea";
import Points from "./Points";
import TectSection from "./TextSection";
import CardsSection from "./CardsSection";

function DesktopComponent() { 

  return (
   
      <Container>      
      <BannerArea />
	  <Points />
	  <TectSection />
	  <CardsSection />
      </Container>
    
  );
}

export default DesktopComponent;