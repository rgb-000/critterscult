import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
 /* SideBtnWrap,
  SidebarRoute,*/
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
              <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="scene_01" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="nfts" onClick={toggle}>
            Collection
          </SidebarLink>
          <SidebarLink to="scene_02" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Sun Studio
          </SidebarLink>
          <SidebarLink to="Faq" onClick={toggle}>
            F.A.Q.
          </SidebarLink>
        </SidebarMenu/*>
        <SideBtnWrap>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SideBtnWrap*/>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
