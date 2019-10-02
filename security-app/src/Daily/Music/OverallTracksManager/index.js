/**
 * NPM / Yarn imports
 */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

/**
 * Local imports
 */

import { StyledOverallButton, StyledTrackManager } from './overallTracksManager.styled';
import { MdPlayCircleOutline, MdPauseCircleOutline, MdReplay } from 'react-icons/md';

/**
 * Component
 */
const OverallTracksManager = ({ isPlaying, setIsPlaying }) => {
    return (
        <StyledTrackManager>
            <StyledOverallButton type="button" playing={isPlaying} onClick={() => setIsPlaying(true)}>
                <MdPlayCircleOutline />
            </StyledOverallButton>
            <StyledOverallButton type="button" playing={!isPlaying} onClick={() => setIsPlaying(false)}>
                <MdPauseCircleOutline />
            </StyledOverallButton>
            <StyledOverallButton type="button">
                <MdReplay />
            </StyledOverallButton>
        </StyledTrackManager>
    );
};

const mapStateToProps = ({ musicModal: { isPlaying } }) => ({
    isPlaying,
});

const mapDispatchToProps = ({ musicModal: { setIsPlaying } }) => ({
    setIsPlaying,
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(OverallTracksManager);
