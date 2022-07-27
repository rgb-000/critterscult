import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars, FaTwitter, FaDiscord } from "react-icons/fa";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    SocialIcons,
    SocialIconLink,
    ShadeFooter,
    /*FireLinks,
      Fire*/
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
                    <NavLogo to="/" onClick={toggleHome}>
                        Critters Cult
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="scene_01"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Project
                            </NavLinks>
                        </NavItem>
                

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
                            >
                                Development
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks
                                to="Faq"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                F.A.Q.
                            </NavLinks>
                        </NavItem>
                    </NavMenu><SocialIcons>
                        <SocialIconLink href="https://twitter.com/critterscult" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="https://discord.com/invite/RNSRHaxzbR" target="_blank" aria-label="Discord">
                            <FaDiscord />
                        </SocialIconLink>
                    </SocialIcons>
                </NavbarContainer>
            </Nav>    <ShadeFooter scrollNav={scrollNav}/>


        </>
    );
};

export default Navbar;