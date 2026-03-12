// import React, { useState } from "react";
// import axios from "axios";
import Globe from "../src/Component/Contact/Globle";
// import { useEffect } from "react";
import TechOrbitHero from "../src/Component/Home/TechOrbitHero";
import LightRaysWrapper from "../src/Component/Home/LightRaysWrapper";
import HeroSection from "../src/Component/Home/HeroSection";
import Workexprience from "../src/Component/Home/Workexprience";
import From from "../src/Component/Contact/From";
import GlobeFrom from "../src/Component/Contact/GlobeFrom";
// import { From } from "./Home/Contact/From";

const Home = () => {
 
  return (
    <div>
      
        <HeroSection />
        <Workexprience />
        <TechOrbitHero />
          <GlobeFrom/>
            
       
      
    </div>
  );
};

export default Home;
