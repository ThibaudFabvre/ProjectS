/**
 * NPM / Yarn imports
 */

import React, { useRef, createRef, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
/**
 * Local imports
 */
import { StyledListDisplay } from './track.styled';

/**
 * Component
 */

const Track = ({ track, isPlaying }) => {
    const audioRef = useRef(null);
    const sliderRef = useRef(null);
    const timerRef = useRef(null);
    // Updates the timer slider depending on audio.currentTime
    const handleTimerUpdate = () => {
        const currentSeconds =
            (Math.floor(audioRef.current.currentTime % 60) < 10 ? '0' : '') + Math.floor(audioRef.current.currentTime % 60);
        const currentMinutes = Math.floor(audioRef.current.currentTime / 60);

        // Sets the current song location compared to the song duration.
        timerRef.current.textContent = `${currentMinutes}:${currentSeconds} / ${Math.floor(audioRef.current.duration / 60)}:${
            Math.floor(audioRef.current.duration % 60) < 10 ? '0' : ''
        }${Math.floor(audioRef.current.duration % 60)}`;

        // Fills out the slider with the appropriate position.
        const percentageOfSong = audioRef.current.currentTime / audioRef.current.duration;
        const percentageOfSlider = sliderRef.current.offsetWidth * percentageOfSong;

        // Updates the track__duration input value
        sliderRef.current.value = Math.round(percentageOfSlider);
    };

    useEffect(() => {
        console.log(audioRef.current);
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [audioRef, isPlaying, track]);

    const { name, path } = track;

    return (
        <StyledListDisplay>
            {name}
            <audio ref={audioRef} onTimeUpdate={handleTimerUpdate}>
                <source src={path} type="audio/mpeg" />
                <track src={name} kind="captions" />
            </audio>
            <input type="range" steps="1" min="0" max="100" defaultValue="0" name="Audio timer" ref={sliderRef} />
            <span ref={timerRef} />
        </StyledListDisplay>
    );
};

/**
 * Export
 */

const mapStateToProps = ({ musicModal: { isPlaying } }) => ({
    isPlaying,
});

export default compose(connect(mapStateToProps))(Track);
