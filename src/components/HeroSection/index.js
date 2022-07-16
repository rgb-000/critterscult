import React, { /*useState,*/ Component } from "react";
import Mp3 from "../../audio/audio.mp3";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
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
                    <img alt="tape" src="images/tape.png"/>
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
      <HeroBg>
              
              <VideoBg/>

      </HeroBg>
      <HeroContent>
              
        <HeroP>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum temporibus quam nesciunt similique accusamus consectetur odit aut exercitationem, amet corrupti repellendus ad, velit quibusdam veniam eaque blanditiis deserunt provident ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum temporibus quam nesciunt similique accusamus consectetur odit aut exercitationem, amet corrupti repellendus ad, velit quibusdam veniam eaque blanditiis deserunt provident ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum temporibus quam nesciunt similique accusamus consectetur odit aut exercitationem, amet corrupti repellendus ad."                 

              </HeroP><Play />
        <HeroBtnWrapper>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
