import { Container} from "react-bootstrap";
import HeroSection from "./HeroSection";
import Points from "./Points";
import TectSection from "./TextSection";
import CardsSection from "./CardsSection";

function MobileComponent() { 

  return (
   
    <Container>      
      <HeroSection />
      <Points />
      <TectSection />
      <CardsSection />
    </Container>
    
  );
}

export default MobileComponent;