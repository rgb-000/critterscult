import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Nfts from "../components/Nfts";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import { homeObj1, homeObj2} from "../components/InfoSection/Data";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObj1} />
      <Nfts />
      <InfoSection {...homeObj2} />
          <Services />
          <Faq/>
      <Footer />
    </>
  );
};

export default Home;
