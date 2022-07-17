import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: fit-content;
  display: flex;
    margin: 80px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #242622;


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
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media all and (max-width: 768px) {
 padding: 0 12px;
  grid-gap: 12px;
  }

 @media all and (max-width: 480px) {
 padding: 0 8px;
  grid-gap: 8px;
  }

`;

export const ServicesCard = styled.div`
  background: #242622;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 192px;
  padding: 0px;
  box-shadow: 0 3px 6px black;
  transition: all 0.2s ease-in-out;
  overflow:hidden;
 @media all and (max-width: 768px) {
    max-height: 144px;
    min-width:144px;
  }

 @media all and (max-width: 480px) {
    max-height: 96px;
    min-width: 96px;
  }


  &:hover {
    box-shadow: 0 6px 6px #242622;
    transition: all 0.3s ease-in-out;
    cursor: zoom-in;
    transform: scale(2);
position:center;
     z-index:1000;

  }

`;

export const ServicesIcon = styled.img`
  height: 192px;
  width: 192px;

 @media all and (max-width: 768px) {
    height: 144px;
    width: 144px;
  }

 @media all and (max-width: 480px) {
    height: 96px;
    width: 96px;
  }

`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media all and (max-width: 480px) {
    font-size: 2rem;
  }
`;



/*export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;*/
