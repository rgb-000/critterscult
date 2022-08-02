import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: rgb(32, 39, 32);
  background-image: url("images/scene_06.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 2000px 668px;
  height:668px;
  z-index: 100;
  display: flex;
  max-width: 100vw;
  align-items: center;
  flex-direction: column;
  align-content: stretch;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  /*display: flex;*/
display:none;
justify-content: center;

  @media all and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #89d9d9;

  @media all and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;

  @media all and (max-width: 768px) {
    align-self: center;
  }
`;



export const FooterLink = styled(Link)`
  color: #89d9d9;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media all and (max-width: 768px) {
    align-self: center;
  }
`;

export const SocialMedia = styled.section`
  max-width: 100vw;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  margin: 20px auto 0 auto;
  width:100vw;
  z-index:1000;


  @media all and (max-width: 820px) {
  }
`;

export const SocialLogo = styled(Link)`
  color: #89d9d9;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.0rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #89d9d9;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
width:10vw;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #89d9d9;
  font-size: 20px;
`;


