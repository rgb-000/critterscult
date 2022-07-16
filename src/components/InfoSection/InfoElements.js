import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #eec39c;
  background: ${({ lightBg }) => (lightBg ? "#242622" : "#242622")};

  @media all and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const InfoWrapper = styled.div`
display: block;
z-index: 1;
height: content;
width: content;
margin-top:80px;
overflow:hidden;
padding: 0 0;
justify-content: center;

@media all and (max-width: 768px) {
margin-top:80px;

  }

`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-rows: minmax(auto,1fr);
    align-items: start;
    grid-template-areas: 'col1 col2';
    align-content: stretch;
    justify-items: end;
    justify-content: start;
     grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};


  @media all and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  position:absolute;
  padding: 0 0;
  grid-area: col2;

@media all and (max-width: 768px) {
      position:relative;

  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  width:1500px;
  max-width:1500px;
  margin-right:10vw;
  grid-area: col1;

 @media all and (max-width: 1650px) {
  margin-left:0
}

  @media all and (max-width: 1500px) {
  margin-left:auto;
  margin-right:auto;
  max-height:66vw;
  max-width:100% !important;
}

@media all and (max-width: 1100px) {
  width:1000px;
}

@media all and (max-width: 600px) {
  width:500px;
}

`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  margin-right:5vw;
  padding-bottom: 60px;

  @media all and (max-width: 768px) {
    display: flex;
    width:80vw;
    margin-right:10vw;
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
 margin-top:30px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#eec39c")};

  @media all and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#fff" : "#eec39c")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 1500px;
    min-width: 500px;
    margin-left:10vw;
    background-color:#242622;

@media all and (max-width: 1500px) {
    margin-left:auto;
    margin-right:auto;}
  
`;

export const Img = styled.img`
  width: 1500px;
  min-width: 500px !important;
  padding-right: 0;
@media all and (max-width: 1500px) {
    width:100%;

`;
