import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #eec39c;
  background: ${({ lightBg }) => (lightBg ? "#242622" : "#242622")};

  @media all and (max-width: 768px) {
    padding: 0;
  }
`;

export const InfoWrapper = styled.div`
display: block;
z-index: 1;
height: content;
width: content;
margin-top:40px;
padding: 0 0;
justify-content: center;

@media all and (max-width: 768px) {
margin-top:0;

  }

`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-rows: minmax(1fr);
    align-items: start;
    grid-gap: 40px;
    align-content: stretch;
    justify-items: end;
    justify-content: center;
     grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};


  @media all and (max-width: 1280px) {
    grid-template-areas: 'col1' 'col2';
    padding:0;
    place-items:center;
    place-content:center;
    align-content: stretch;
    align-items: stretch;
    justify-items: center;
     max-width:100vw;}


`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  position:relative;
  width:fit-content;
  padding: 0 0;
  grid-area: col2;

@media all and (max-width: 1000px) {
      position:relative;
max-height:fit-content!important;

  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  width:fit-content;
  
  
 @media all and (max-width: 1920px) {
  grid-area: col2;

}



@media all and (max-width: 1280px) {
  grid-area: col1;

}

@media all and (max-width: 500px) {


}


`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-bottom: 10px;

  @media all and (max-width: 1500px) {
    display: flex;
    margin-right:auto;
    flex-direction: column;
  }


`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 18px;
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
    max-width:100vw;

  }
`;

export const Subtitle = styled.p`
  max-width: 600px;
  font-size: 17px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#fff" : "#eec39c")};

@media all and (max-width: 480px) {
    max-width:100vw;

  }
`;

export const BtnWrap = styled.div`
  display: none;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 1500px;
    min-width: 500px;
    background-color:#242622;

@media all and (max-width: 1500px) {
    max-width: 1000px;

    margin-left:auto;
    margin-right:auto;}
  
`;

export const Img = styled.img`
  width: 1500px;
  min-width: 500px !important;
  padding-right: 0;

@media all and (max-width: 1500px) {
    width:1000px;
    margin-top:250px;


}
@media all and (max-width: 1280px) {
    width:1000px;
    margin-top:20px;

}

@media all and (max-width: 500px) {
    width:500px;
}
`;
