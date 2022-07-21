import React, { useState, useEffect, Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars, FaTwitter, FaDiscord } from "react-icons/fa";
import Mp3 from "../../audio/audio.mp3";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  FireLinks,
  SocialIcons,
  SocialIconLink,
  Fire
} from "./NavbarElements";



class Play extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false
        };

        this.url = Mp3;
        this.audio = new Audio(this.url);
        this.audio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        const wasPlaying = this.state.play;
        this.setState({
            play: !wasPlaying
        });

        if (wasPlaying) {
            this.audio.pause();
        } else {
            this.audio.play()
        }
    }

    render() {
        return (
            <div class="tape" id="Ost">
                <button
                    id="audioBtn"
                    onClick={this.togglePlay}> {this.state.play ? "" : ""}
                    <img alt="tape" src="images/tape.png" />
                </button>
            </div>
        );
    }
}


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
                About
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
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sun Studio
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
          </Nav>
          <FireLinks
              scrollNav={scrollNav}
              to="scene_01"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
          >
              <Fire scrollNav={scrollNav} />

          </FireLinks>
          <Play />
    </>
  );
};

export default Navbar;
