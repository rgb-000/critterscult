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
  width: 100vw;
  min-height: 501px;
  overflow: hidden;

@media all and (max-width: 768px) {
   min-height: 334px;
   height: 334px;
   background-size: 2000px 334px;


  }

`;

export const VideoBg = styled.video`
  width: 100%;
  max-height: 501px;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 500px;
  min-height:fit-content;
  top:540px;
  position: absolute;
  padding: 8px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

@media all and (max-width: 768px) {
      top:340px;
  }

`;

export const HeroH1 = styled.h1`
   color: #fbb954;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  margin-top:30px;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 16px;

 
`;

export const HeroO = styled.p`
  margin-top: 18px;
  color:#72b6cf;
  display:inline;
  font-size: 17px;
  text-align: center;
  line-height:24px;
  margin-bottom:5vh;
  max-height:800px;
  overflow-y:auto;

  @media all and (max-width: 768px) {
    font-size: 18px;
  }

  @media all and (max-width: 480px) {
    margin: 25px;
  }


:first-letter {
  font-size: 40px;
  margin-left:-25px;
  line-height: 30px;
  font-weight: bold;
  color: #72b6cf;
}

:after {
    content: '"';
    font-size: 24px;
    line-height: 0px;
    font-weight: bold;
    color: #72b6cf;
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
