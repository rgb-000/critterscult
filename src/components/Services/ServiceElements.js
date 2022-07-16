import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #242622;
margin-bottom: 80px;
  @media all and (max-width: 768px) {
    height: content;
  }

  @media all and (max-width: 480px) {
    height: content;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media all and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #242622;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 360px;
  max-width:360px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 30, 50, 0.9);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 192px;
  width: 192px;
  margin-bottom: 10px;

`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media all and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
color:#2e879e;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
color:#2e879e;
`;
