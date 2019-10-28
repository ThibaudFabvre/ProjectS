/**
 * NPM / Yarn imports
 */

import React, { useRef, createRef, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TrackSpectrum from './TrackSpectrum';
/**
 * Local imports
 */
import { StyledTrackDisplay, StyledTrackName, StyledTrackSpectrum } from './track.styled';

/**
 * Component
 */

const Track = ({ track, isPlaying, activeTrack }) => {
    const audioRef = createRef(null);
    const sliderRef = useRef(null);
    const timerRef = useRef(null);

    // Updates the timer slider depending on audio.currentTime
    const handleTimerUpdate = () => {
        const audioTimer = audioRef.current.currentTime;
        const audioDuration = audioRef.current.duration;
        const currentSeconds = (Math.floor(audioTimer % 60) < 10 ? '0' : '') + Math.floor(audioTimer % 60);
        const currentMinutes = Math.floor(audioTimer / 60);

        // Sets the current song location compared to the song duration.
        timerRef.current.textContent = `${currentMinutes}:${currentSeconds} / ${Math.floor(audioDuration / 60)}:${
            Math.floor(audioDuration % 60) < 10 ? '0' : ''
        }${Math.floor(audioDuration % 60)}`;

        // Fills out the slider with the appropriate position.
        const percentageOfSong = audioTimer / audioDuration;
        const sliderNewValue = sliderRef.current.offsetWidth * percentageOfSong;

        // Updates the track__duration input value
        sliderRef.current.value = sliderNewValue;
    };

    useEffect(() => {
        console.log(audioRef);
        audioRef.current.load();
        isPlaying && audioRef.current.play();
    }, [activeTrack]);

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [isPlaying]);

    const { name, path } = track;
    return (
        <StyledTrackDisplay>
            <StyledTrackSpectrum>
                {audioRef && <TrackSpectrum audioRef={audioRef} trackPath={path} />}
                <audio ref={audioRef} onTimeUpdate={handleTimerUpdate}>
                    <source src={path} type="audio/mpeg" />
                    <track src={name} kind="captions" />
                </audio>
                <input type="range" steps="1" min="0" max="596" defaultValue="0" name="Audio timer" ref={sliderRef} />
                <span ref={timerRef} />
            </StyledTrackSpectrum>
            <StyledTrackName>{name}</StyledTrackName>
        </StyledTrackDisplay>
    );
};

/**
 * Export
 */

const mapStateToProps = ({ musicModal: { isPlaying } }) => ({
    isPlaying,
});

export default compose(connect(mapStateToProps))(Track);
