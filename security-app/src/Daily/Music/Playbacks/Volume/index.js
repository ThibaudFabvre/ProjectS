import React from 'react';
import { StyledListVolume, StyledListVolumeIdentifier, StyledListVolumeInput } from './volume.styled';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Changes Volume based on input

const Volume = ({ setVolume }) => {
    const handleTrackVolume = (event) => {
        const input = event.target.value / 100;
        setVolume(input);
    };

    return (
        <StyledListVolume>
            <StyledListVolumeIdentifier>Volume :</StyledListVolumeIdentifier>
            <StyledListVolumeInput type="range" min="0" max="100" name="volume" list="tickmarks" onChange={handleTrackVolume} />
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
    );
};
const mapDispatchToProps = ({ musicModal: { setVolume } }) => ({
    setVolume,
});

export default compose(
    connect(
        null,
        mapDispatchToProps,
    ),
)(Volume);
