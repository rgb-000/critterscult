import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgb(32,39,32);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  color: #72b6cf;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
color: #72b6cf;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  color: #72b6cf;

  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
color: #72b6cf;
;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(8, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #72b6cf;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarUrl = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #72b6cf;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
  
  ${(props) =>
    props.href &&
    css`
      && {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: #72b6cf;
          ;
        }
      }
    `}
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
