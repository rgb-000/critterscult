import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import NftSection from "../components/NftSection";

import Services from "../components/Services";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import { home1, home2, NftText} from "../components/InfoSection/Data";


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
      <InfoSection {...home1} />
          <NftSection {...NftText} />
          <InfoSection {...home2} />
          <Services />
          <Faq/>
      <Footer />
    </>
  );
};

export default Home;
