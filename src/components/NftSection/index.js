import React from "react";
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

} from "../InfoSection/InfoElements";
import Nfts from "./Data";


const NftSection = ({
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    img,
    alt,

}) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1 id="nfttext">
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
            
                            </TextWrapper>
                        </Column1>
                        <Column2 id="nftgrid">
                            <Nfts/>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default NftSection;