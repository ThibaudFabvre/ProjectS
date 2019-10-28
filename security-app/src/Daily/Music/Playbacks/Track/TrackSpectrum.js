import React, { useEffect, useRef } from 'react';

const TrackSpectrum = ({ audioRef, trackPath }) => {
    const canvasRef = useRef(null);
    let context, analyser, frequency_array;
    let source;

    const initPage = () => {
        const audio = audioRef.current;
        context = new (window.AudioContext || window.webkitAudioContext)();
        analyser = context.createAnalyser();
        frequency_array = new Uint8Array(analyser.frequencyBinCount);
        audio.src = trackPath; // the source path

        source = context.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(context.destination);

        animationLooper();
    };

    const animationLooper = () => {
        const bars = 200;
        const barWidth = 2;
        const radius = 100;
        canvasRef.current.width = 600;
        canvasRef.current.height = 600;
        const canvasWidth = canvasRef.current.width / 2;
        const canvasHeight = canvasRef.current.height / 2;

        context = canvasRef.current.getContext('2d');

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

            const barHeight = frequency_array[i] * 0.7;

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

    useEffect(() => {
        if (source === undefined) {
            initPage();
        } else {
            source.disconnect();
            analyser.disconnect();
            initPage();
        }
    }, [trackPath]);

    return (
        <>
            <canvas ref={canvasRef} />
        </>
    );
};

export default TrackSpectrum;
