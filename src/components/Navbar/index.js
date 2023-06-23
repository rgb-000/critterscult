import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars, FaTwitter, FaDiscord, FaHome, FaBookDead, FaFortAwesome } from "react-icons/fa";
import { BiJoystick } from "react-icons/bi";
import { TbCandle } from "react-icons/tb";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavEx,
    SocialIcons,
    SocialIconLink,
    ShadeFooter,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
  
    const changeNav = () => {
      if (window.scrollY >= 50) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);
  
    const toggleHome = () => {
      scroll.scrollToTop();
    };
  
    return (
        <>

            <Nav scrollNav={scrollNav}>

                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}><FaHome />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                      
                        <NavItem>
                            <NavLinks
                                to="nfts"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Collection

                            </NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks
                                to="scene_02"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >Project
                            </NavLinks>
                        </NavItem>
                      
                        <NavItem>
                            <NavEx href="https://loopchronicles.app" target="_blank" aria-label="Loop" className="new">
                                Loop Chronicles&nbsp; <BiJoystick />
                            </NavEx>
                        </NavItem>
                        <NavItem>
                            <NavEx href="https://book.critterscult.com" target="_blank" aria-label="Book" className="new">
                               Critters Book&nbsp; <FaBookDead />
                            </NavEx>
                        </NavItem>
                        <NavItem>
                            <NavEx href="https://library.critterscult.com" target="_blank" aria-label="Book" className="new">
                               The Library&nbsp; <FaFortAwesome />
                            </NavEx>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="Faq"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            > F.A.Q.
                            </NavLinks></NavItem>
                       
                    </NavMenu><SocialIcons>
                    <SocialIconLink>
                                                 </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/critterscult" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="https://discord.com/invite/RNSRHaxzbR" target="_blank" aria-label="Discord">
                            <FaDiscord />
                        </SocialIconLink>
                       
                    </SocialIcons>
                </NavbarContainer>
            </Nav>    <ShadeFooter scrollNav={scrollNav} />

        </>
    );
};

export default Navbar;