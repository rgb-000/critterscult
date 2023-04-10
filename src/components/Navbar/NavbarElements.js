import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "rgb(32, 39, 32)" : "transparent")};
  height: 50px;
  margin-top: -52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media all and(max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const FireLinks = styled(LinkS)`
  cursor: pointer;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #72b6cf;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media all and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
    color:#72b6cf;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  margin-top: -4px;

`;

export const NavLinks = styled(LinkS)`
  color: #72b6cf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.hover {   color: #72b6cf}

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavEx = styled.a`
  color: #72b6cf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.hover {   color: #72b6cf}
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: rgb(32, 39, 32);
  white-space: nowrap;
  padding: 10px 22px;
  color: #fbb954;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #89d9d9;
    color: rgb(32, 39, 32);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  width:200px;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 6px;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIconLink = styled.a`
  color: #72b6cf;
  font-size: 20px;
  line-height: 30px;

  @media all and (max-width: 768px) {
    display: none;
  }

`;

export const ShadeFooter = styled.div`
  position: fixed;
  background-image: url("/images/footer-mask.png");
  background-repeat-y: no-repeat;
  background-repeat-x: repeat;
  bottom: 0;
  animation: ${({ scrollNav }) => (scrollNav ? "AHide forwards" : "AShow infinite")};
  mix-blend-mode: darken;
  min-width: 100vw;
  z-index:1000;
  min-height: 88px;
  overflow: hidden;
  animation-duration: 3000ms;
  background-size: 88px 88px;
`;