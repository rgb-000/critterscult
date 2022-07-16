import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #242622;
  background-image: url("images/scene_06.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height:668px;
  display: flex;
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
  color: #fff;

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
  color: #fff;
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
    width:80vw;

  @media all and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
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
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
width:10vw;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;
`;
