import React, { /*useState,*/ Component } from "react";
import Mp3 from "../../audio/audio.mp3";
import {
  HeroContainer,
  HeroBg,
  /*VideoBg,*/
  HeroContent,
  HeroH1,
  HeroO,
    HeroBtnWrapper,
   

  /*ArrowForward,
  ArrowRight,*/
} from "./HeroElements";
/*import { Button } from "../ButtonElements";*/



class Play extends Component {
    state = {
        audio: new Audio(Mp3),
        isPlaying: false,
    };

    playPause = () => {

        let isPlaying = this.state.isPlaying;
        if (isPlaying) {
            this.state.audio.pause();
        } else {     
            this.state.audio.play();
        }
        this.setState({ isPlaying: !isPlaying });
    };
    render() {
        return (
            <div class="tape" id="Ost">
                {/* Show state of song on website */}
                <p>
                    {this.state.isPlaying ?
                        "" :
                        ""}
                </p>

                {/* Button to call our main function */}
                <button onClick={this.playPause}>
                    <img alt="tape" src="images/tape.gif"/>
                </button>
            </div>
        );
    }
}

const HeroSection = () => {
  /*const [hover, setHover] = useState(false);
    const onHover = () => {
    setHover(!hover);
  };*/

  return (
    <HeroContainer id="home" >
      <HeroBg/*>              
              <VideoBg/*/>
      </HeroBg>
      <HeroContent>
              <HeroH1>Prologue</HeroH1>
              <HeroO>"In a small town where no one remembers its name, abandoned structures, and spiral patterns are appearing in the wilderness overnight. There are rumors of stared eye people being seen wandering around for days before returning to their normal lives as if nothing had happened. At the gas station dinner, no clock seems to work and the waitress is impatient because she doesn't know if her shift is over or not. An long-beard man says it's close to the blue hour because no animal sounds can be heard outside. In a traditional hotel, a joyful valse is being played at the masquerade ball. Two agents are driving through the night to investigate why trains are no longer arriving at the station.
              </HeroO><Play/>

        <HeroBtnWrapper>
        </HeroBtnWrapper>
          </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
