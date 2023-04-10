import React from "react";
import { BiJoystick } from "react-icons/bi";
import { FaBookDead, FaTwitter, FaDiscord } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarUrl,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="scene_01" onClick={toggle}>
            Background
          </SidebarLink>
          <SidebarLink to="scene_02" onClick={toggle}>
            Project
          </SidebarLink>
          <SidebarLink to="nfts" onClick={toggle}>
          Collection
          </SidebarLink>
          <SidebarLink to="Faq" onClick={toggle}>
            F.A.Q.
          </SidebarLink>
          
          <SidebarUrl href="https://loopchronicles.app" onClick={toggle} target="_blank" rel="noopener noreferrer" className="new">
              The Loop Chronicles&nbsp;<BiJoystick/>
          </SidebarUrl>
          <SidebarUrl onClick={toggle} href="https://book.critterscult.com" to="https://book.critterscult.com" target="_blank" rel="noopener noreferrer" className="new">
              The Critters Book&nbsp;<FaBookDead/>
          </SidebarUrl>
          <SidebarUrl href="https://twitter.com/critterscult" onClick={toggle} target="_blank" rel="noopener noreferrer">
          &nbsp;<FaTwitter/>&nbsp;
          </SidebarUrl>
          <SidebarUrl onClick={toggle} href="https://discord.com/invite/suns-studio" target="_blank" rel="noopener noreferrer">
          &nbsp;<FaDiscord/>&nbsp;
          </SidebarUrl>
        
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;