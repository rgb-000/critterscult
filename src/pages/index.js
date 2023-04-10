import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import NftSection from "../components/NftSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import { scene_01, scene_02, NftText } from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
            <div className="main">
                <HeroSection />
                <InfoSection {...scene_01} />
                <NftSection {...NftText} />
                <InfoSection {...scene_02} />
                <Services />
                <Faq />
            </div>
            <Footer />
    </>
  );
};

export default Home;