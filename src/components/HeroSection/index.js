import React/*, { useState, Component }*/ from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroO,
    HeroBtnWrapper,

    /*ArrowForward,
    ArrowRight,*/
} from "./HeroElements";
/*import { Button } from "../ButtonElements";*/




const HeroSection = () => {
    /*const [hover, setHover] = useState(false);
      const onHover = () => {
      setHover(!hover);
    };*/


    return (
        <HeroContainer id="home" >
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Prologue</HeroH1>
                <HeroO>"In a small town where no one remembers its name, abandoned structures, and spiral patterns appear in the wilderness overnight. There are rumors of stared eye people being seen wandering around for days before returning to their everyday lives as if nothing had happened. At the diner shop, no clock seems to work and the waitress, impatiently as she doesn't know if her shift is over or not, was told by a long-beard man it's close to the blue hour because no animal sounds can be heard outside. Cutting the cold silence, distant music was coming from a traditional hotel, where a slow-tempo valse is played despite no one left on the masquerade ball. The guest list has the name of two agents, but they are not seen in the hotel that night, to follow a dubious clue that will lead them deep into the woods.
                </HeroO>

                <HeroBtnWrapper>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    );
};

export default HeroSection;