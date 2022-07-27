import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #242622;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  font-size:16px;
  min-height:fit-content;
  z-index: 1;


`;



export const HeroBg = styled.div`
  position: absolute;
  background-color: #242622;
  background-image: url("/images/scene_05.gif");
  background-repeat-y: no-repeat;
  background-repeat-x: repeat;
  background-position: center;
  background-size: contain;
  background-size: 3000px 501px;
  top: 0;
  min-width: 100vw;
  min-height: 501px;
  overflow: hidden;

@media all and (max-width: 768px) {
   min-height: 334px;
   height: 334px;
   background-size: 2000px 334px;


  }

`;


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 500px;
  min-height:fit-content;
  top:567px;
  position: absolute;
  padding: 8px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

@media all and (max-width: 768px) {
      top:400px;
  }

`;

export const HeroH1 = styled.h1`
   color: #fbb954;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  margin-top:10px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

export const Hero = styled.p`
  margin-top: 16px;
  color:#72b6cf;
  display:inline;
  font-size: 16px;
  text-align: left;
  whitespace: pre;
  line-height:24px;
  margin-bottom:5vh;
  max-height:800px;
  overflow:visible!important;

  @media all and (max-width: 768px) {
    font-size: 16px;
  }

  @media all and (max-width: 480px) {
    margin: 16px;
  }

`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
