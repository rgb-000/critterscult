import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #242622;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;
export function Fire() {

    return (
            <div className='Fire'>



            <img id="Fire" alt="Fire" src="images/fire.gif"/>


            </div>
    );
};

export const HeroBg = styled.div`
  position: absolute;
  background-color: #242622;
  background-image: url("/images/scene_05.png");
  background-repeat-y: no-repeat;
  background-repeat-x: repeat;
  background-position: center;
  background-size: contain;
  background-size: 3000px 501px;
  top: 0;
  width: 100vw;
  min-height: 501px;
  overflow: hidden;
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
  min-height:501px;
  top:600px;
  position: absolute;
  padding: 8px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
font-family: 'Roboto Mono';
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 18px;
  color: #fff;
  display:grid;
  font-size: 16px;
  text-align: center;
  max-width: 900px;
  margin-bottom:120px;

  
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480) {
    font-size: 18px;
  }
`;

export const HeroO = styled.p`
  margin-top: 18px;
  color:#2e879e;
  display:inline;
  font-size: 16px;
  text-align: left;
line-height:24px;
  margin-bottom:120px;

:first-letter {
    font-size: 54px;
margin-left:-35px;
line-height: 20px;
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
  
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480) {
    font-size: 18px;
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
