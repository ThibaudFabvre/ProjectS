/**
 * NPM / Yarn imports
 */

import React, { useRef, createRef, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
/**
 * Local imports
 */
import { StyledTrackDisplay, StyledTrackName, StyledTrackSpectrum, StyledCanvas } from './track.styled';

/**
 * Component
 */

const Track = ({ track, isPlaying, activeTrack }) => {
    const audioRef = createRef(null);
    const sliderRef = useRef(null);
    const timerRef = useRef(null);
    const canvasRef = useRef(null);

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

    const reloadAudio = () => {
        audioRef.current.load();
    };

    // --------------------------------------- CANVAS SECTION ------------------------------------------
    let context, analyser, barHeight, frequency_array;
    let bars = 200;
    let barWidth = 2;
    let source;

    const initPage = () => {
        const audio = audioRef.current;
        const context = new (window.AudioContext || window.webkitAudioContext)();
        analyser = context.createAnalyser();
        frequency_array = new Uint8Array(analyser.frequencyBinCount);
        audio.src = track.path; // the source path

        source = context.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(context.destination);

        animationLooper();
    };

    const disconnectAudio = () => {
        source.disconnect();
        analyser.disconnect();
    };

    const animationLooper = () => {
        context = canvasRef.current.getContext('2d');
        canvasRef.current.width = 600;
        canvasRef.current.height = 600;
        const canvasWidth = canvasRef.current.width / 2;
        const canvasHeight = canvasRef.current.height / 2;
        const radius = 150;
        context.beginPath();
        context.arc(canvasWidth, canvasHeight, radius, 0, 2 * Math.PI);
        context.stroke();

        // style the background
        const gradient = context.createLinearGradient(0, 0, 0, canvasRef.current.height);
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        //draw a circle
        context.beginPath();
        context.arc(canvasWidth, canvasHeight, radius, 0, 2 * Math.PI);
        context.stroke();

        analyser.getByteFrequencyData(frequency_array);

        for (var i = 0; i < bars; i++) {
            //divide a circle into equal parts
            const rads = (Math.PI * 2) / bars;

            barHeight = frequency_array[i] * 0.7;

            // set coordinates
            const x = canvasWidth + Math.cos(rads * i) * radius;
            const y = canvasHeight + Math.sin(rads * i) * radius;
            const x_end = canvasWidth + Math.cos(rads * i) * (radius + barHeight);
            const y_end = canvasHeight + Math.sin(rads * i) * (radius + barHeight);

            //draw a bar
            drawBar(x, y, x_end, y_end, barWidth, frequency_array[i]);
        }
        window.requestAnimationFrame(animationLooper);
    };

    const drawBar = (x1, y1, x2, y2, width, frequency) => {
        const lineColor = 'rgb(' + frequency + ', ' + frequency + ', ' + 205 + ')';

        context.strokeStyle = lineColor;
        context.lineWidth = width;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    };

    // --------------------------------------- CANVAS SECTION END ------------------------------------------

    useEffect(() => {
        initPage();
        isPlaying && audioRef.current.play();
        return () => {
            disconnectAudio();
        };
    }, [activeTrack]);

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [audioRef, isPlaying]);

    const { name, path } = track;
    return (
        <StyledTrackDisplay>
            <StyledTrackSpectrum>
                <canvas ref={canvasRef} />
                <audio ref={audioRef} onTimeUpdate={handleTimerUpdate}>
                    <source src={path} type="audio/mpeg" />
                    <track src={name} kind="captions" />
                </audio>
                <input type="range" steps="1" min="0" max="100" defaultValue="0" name="Audio timer" ref={sliderRef} />
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
