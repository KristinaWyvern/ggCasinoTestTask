import React from 'react';
import useDeviceDetect from './useDeviceDetect';
import DesktopComponent from "./components/Desktop/DesktopComponent";
import MobileComponent from "./components/Mobile/MobileComponent";
import "./css/style.css";

function App() {

  const { isMobile } = useDeviceDetect();

  return (
    
    <>
      {
        isMobile ? <MobileComponent /> : <DesktopComponent />
      }
    </>
  )
}

export default App
