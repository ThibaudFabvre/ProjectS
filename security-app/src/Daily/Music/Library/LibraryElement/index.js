import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosPlayCircle } from 'react-icons/io';

import { StyledListElement, StyledElementDetail } from './libraryElement.styled';

const LibraryElement = ({ track, index, removeTrack, setActiveTrack, setIsPlaying }) => {
    return (
        <StyledListElement>
            <StyledElementDetail>{track.name}</StyledElementDetail>
            <StyledElementDetail>{track.duration}</StyledElementDetail>
            <IoIosPlayCircle
                onClick={() => {
                    setIsPlaying(true);
                    setActiveTrack(index);
                }}
            />
            <FaTrashAlt onClick={() => removeTrack(index)} />
        </StyledListElement>
    );
};

const mapDispatchToProps = ({ musicModal: { removeTrack, setActiveTrack, setIsPlaying } }) => ({
    removeTrack,
    setActiveTrack,
    setIsPlaying,
});

export default compose(
    connect(
        null,
        mapDispatchToProps,
    )(LibraryElement),
);
