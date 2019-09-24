/**
 * NPM / Yarn imports
 */

import React from 'react';

/**
 * Local imports
 */
import {
    StyledList,
    StyledListButton,
    StyledListButtons,
    StyledListConfigurations,
    StyledListDisplay,
    StyledListManager,
    StyledListName,
    StyledListPlayer,
    StyledListVolume,
    StyledListVolumeIdentifier,
    StyledListVolumeInput,
} from './track.styled';

/**
 * Component
 */
class Track extends React.Component {
    /**
     * Component construction
     */
    constructor() {
        super();
        this.audioRef = React.createRef();
        this.sliderRef = React.createRef();
        this.timerRef = React.createRef();
    }

    // We have to load the trackNumber before rendering otherwise all the jsx elements using trackNumber won't work
    componentWillMount() {
        this.trackNumber = this.props.trackNumber;
    }

    // List of all the jsx elements we will be handling.
    componentDidMount() {
        this.audio = this.audioRef.current;
        this.slider = this.sliderRef.current;
        this.timer = this.timerRef.current;
    }

    /**
     * Handlers
     */

    // Defines if the audio is playing or not.
    handlePlay = () => {
        this.audio.play();
    };

    handlePause = () => {
        this.audio.pause();
    };

    // Resets audio.
    handleReset = () => {
        this.audio.currentTime = 0;
        this.audio.pause();
    };

    // Changes Volume based on input
    handleTrackVolume = (event) => {
        const input = event.target.value / 100;
        this.audio.volume = input;
    };

    // Updates the timer slider depending on audio.currentTime
    handleTimerUpdate = () => {
        const currentSeconds = (Math.floor(this.audio.currentTime % 60) < 10 ? '0' : '') + Math.floor(this.audio.currentTime % 60);
        const currentMinutes = Math.floor(this.audio.currentTime / 60);

        // Sets the current song location compared to the song duration.
        this.timer.textContent = `${currentMinutes}:${currentSeconds} / ${Math.floor(this.audio.duration / 60)}:${
            Math.floor(this.audio.duration % 60) < 10 ? '0' : ''
        }${Math.floor(this.audio.duration % 60)}`;

        // Fills out the slider with the appropriate position.
        const percentageOfSong = this.audio.currentTime / this.audio.duration;
        const percentageOfSlider = this.slider.offsetWidth * percentageOfSong;

        // Updates the track__duration input value
        this.slider.value = Math.round(percentageOfSlider);
    };

    render() {
        const { track } = this.props;
        const { name, path } = track;

        return (
            <StyledList>
                <StyledListManager>
                    <StyledListName>{name}</StyledListName>
                    <StyledListConfigurations>
                        <StyledListButtons>
                            <StyledListButton>
                                <button type="button" onClick={this.handlePlay}>
                                    Play
                                </button>
                                <button type="button" onClick={this.handlePause}>
                                    Pause
                                </button>
                                <button type="button" onClick={this.handleReset}>
                                    Reset
                                </button>
                            </StyledListButton>
                        </StyledListButtons>
                        <StyledListVolume>
                            <StyledListVolumeIdentifier>Volume :</StyledListVolumeIdentifier>
                            <StyledListVolumeInput
                                type="range"
                                min="0"
                                max="100"
                                name="volume"
                                list="tickmarks"
                                onChange={this.handleTrackVolume}
                            />
                            {/* Marks for blind people and to add more style to the volume slider. Also increases SEO ratin */}
                            <datalist id="tickmarks">
                                <option value="0" label="0%" />
                                <option value="10" />
                                <option value="20" />
                                <option value="30" />
                                <option value="40" />
                                <option value="50" label="50%" />
                                <option value="60" />
                                <option value="70" />
                                <option value="80" />
                                <option value="90" />
                                <option value="100" label="100%" />
                            </datalist>
                        </StyledListVolume>
                    </StyledListConfigurations>
                </StyledListManager>
                <StyledListDisplay>
                    <StyledListPlayer ref={this.audioRef} onTimeUpdate={this.handleTimerUpdate}>
                        <source src={path} type="audio/mpeg" />
                        <track src={name} kind="captions" />
                    </StyledListPlayer>
                    <input type="range" min="0" max="100" defaultValue="0" name="Audio timer" ref={this.sliderRef} />
                    <span ref={this.timerRef} />
                </StyledListDisplay>
            </StyledList>
        );
    }
}

/**
 * Export
 */
export default Track;
