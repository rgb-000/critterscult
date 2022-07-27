import React, { Component } from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    Hero,
    HeroBtnWrapper,
    /*ArrowForward,
    ArrowRight,*/
} from "./HeroElements";
/*import { Button } from "../ButtonElements";*/
import Mp3 from "../../audio/audio.mp3";



class Play extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false
        };

        this.url = Mp3;
        this.audio = new Audio(this.url);
        this.audio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        const wasPlaying = this.state.play;
        this.setState({
            play: !wasPlaying
        });

        if (wasPlaying) {
            this.audio.pause();
        } else {
            this.audio.play()
        }
    }

    render() {
        return (
            <div class="tape" id="Ost">
                <button
                    id="audioBtn"
                    onClick={this.togglePlay}> {this.state.play ? "" : ""}
                    <img alt="tape" src={this.state.play ? "images/tape.gif" : "images/pause.gif"} />
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
            </HeroBg>
            <HeroContent>
                <Play />
                <HeroH1>Prologue</HeroH1>
                <Hero> an outlying town that no one recalls, abandoned structures and spiral patterns started appearing overnight, far away in the fields. Rumors of glazed-eyed wanderers walking around through the night turned that peaceful place upside down.<br /><br />

                    At the diner shop, no clock seems to be working. The waitress holds her head over her hands waiting for her shift to be over. A long-bearded man, sitting next to her, murmurs as if reading her mind that they were entering the blue hour, for no animal sounds could be heard outside.<br /><br />

                    Cutting through the cold silence, a slow tempo waltz can be heard coming from the hotel's ballroom, still being played despite no one is left in the masquerade ball. Two of the guests were missing and nowhere to be seen. An eerie note has been left behind - what seemed to be a clue of what led them deep into the woods.
                </Hero>

                <HeroBtnWrapper>
                </HeroBtnWrapper>
            </HeroContent>
      
        </HeroContainer>

    );
};

export default HeroSection;