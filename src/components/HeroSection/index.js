import React, { Component } from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    Hero,
    HeroBtnWrapper,
} from "./HeroElements";
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
                    <img alt="tape" src={this.state.play ? "images/tape.gif" : "images/pause.gif"} /><span>{this.state.play ? "" : ""}</span>
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
                <Hero>ar away in the fields of a town which name no one recalls, rumors of unknown objects and spiral-like patterns appearing overnight are swirling around and emptying the streets. After the Puffbird Forest Incident, signs of "no trespassing" have been seen more and more frequently beyond the surroundings of the Research Facility.
                    <br /><br />
                    At the diner shop, no clocks seem to be working. The waitress holds her head over her hands waiting for her shift to be over. A long-bearded client murmurs, as if reading her mind, that they could be entering the blue hour, for no animal sounds could be heard outside.
                    <br /><br />
                    Cutting through the cold silence, a slow tempo waltz coming from the hotel's ballroom was still being played, although no one was left in the masquerade ball. Two of the guests were missing and nowhere to be seen. An eerie note left behind could be a clue of what led them deep into the woods.

                </Hero>

                <HeroBtnWrapper>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>

    );
};

export default HeroSection;