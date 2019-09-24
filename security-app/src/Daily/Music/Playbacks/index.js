/**
 * NPM / Yarn imports
 */

import React from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
/**
 * Local imports
 */

// local components imports;
import Track from './Track';
import OverallTracksManager from './OverallTracksManager';
import { StyledPlaybacks, StyledPlaybacksList } from './playbacks.styled';

/**
 * Component
 */

const Playbacks = () => {
    return (
        <StyledPlaybacks>
            {tracksList[1] ? <OverallTracksManager /> : null}
            <StyledPlaybacksList>
                {/* This function also renders the tracks in the list. */}
                {tracksList.map((track, index) => (
                    <Track key={`${track.name}_${uuidv4()}`} trackNumber={index} track={track} />
                ))}
            </StyledPlaybacksList>
        </StyledPlaybacks>
    );
};

/**
 * Export
 */

const mapStateToProps = ({ musicList: { tracksList } }) => ({
    tracksList,
});

const mapDispatchToProps = ({ musicList }) => ({
    addToTrackList: musicList.addTrackToList,
});

connect(
    mapStateToProps,
    mapDispatchToProps,
)(Playbacks);

export default Playbacks;
