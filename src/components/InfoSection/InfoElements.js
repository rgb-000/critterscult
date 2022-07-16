import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#242622" : "#242622")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
display: block;
z-index: 1;
height: content;
width: content;
margin-top:80px;
padding: 0 24px;
justify-content: center;
`;

export const InfoRow = styled.div`
 display: grid;
    display: grid;
    grid-auto-rows: minmax(auto,1fr);
    align-items: start;
    grid-template-areas: 'col1 col2';
    align-content: stretch;
    justify-items: end;
    justify-content: start;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-left:30px;
  position:absolute;

  padding: 0 15px;
  grid-area: col2;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  width:1500px;
  padding: 0 15px;
  grid-area: col1;
margin-left:calc((100vw - 2000px)/2);
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
margin-right:5vw;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#242622")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#242622" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 1500px;
 /* height: 100%;*/
`;

export const Img = styled.img`
  width: 1500px;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
