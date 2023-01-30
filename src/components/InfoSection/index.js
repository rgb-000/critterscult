import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Link
} from "./InfoElements";

const InfoSection = ({
  id,
  alink,
  linktext,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  dark,
  description,
  alink2,
  linktext2,
  description2,
  description3,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle dark={dark} darkText={darkText}>{description}<Link href={alink} target="_blank" rel="noopener noreferrer">{linktext}&nbsp;<FaExternalLinkAlt /></Link>{description2}<Link href={alink2} target="_blank" rel="noopener noreferrer">{linktext2}&nbsp;<FaExternalLinkAlt /></Link>{description3}</Subtitle>
                              
                </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
              </InfoWrapper>

      </InfoContainer>
    </>
  );
};

export default InfoSection;


