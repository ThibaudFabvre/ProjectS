/**
 * NPM / Yarn imports
 */

import React from 'react';
import uuidv4 from 'uuid/v4';
import { compose } from 'redux';
import { connect } from 'react-redux';
/**
 * Local imports
 */

// local components imports;
import Track from './Track';
import Volume from './Volume';
import { TiMediaPlayReverse, TiMediaPlay } from 'react-icons/ti';
import { StyledTrackManager, StyledVolumeManager, StyledSection, StyledButton } from './playbacks.styled';

/**
 * Component
 */

const Playbacks = ({ tracksList, activeTrack, setActiveTrack }) => {
    const track = tracksList[activeTrack];
    return (
        <>
            <StyledSection></StyledSection>
            <StyledTrackManager>
                {tracksList[activeTrack] && (
                    <>
                        <StyledButton onClick={() => setActiveTrack(activeTrack - 1)}>
                            <TiMediaPlayReverse />
                        </StyledButton>
                        <Track track={track} activeTrack={activeTrack} />
                        <StyledButton onClick={() => setActiveTrack(activeTrack + 1)}>
                            <TiMediaPlay />
                        </StyledButton>
                    </>
                )}
            </StyledTrackManager>
            <StyledVolumeManager>
                <Volume />
            </StyledVolumeManager>
        </>
    );
};

/**
 * Export
 */

const mapStateToProps = ({ musicModal: { tracksList, activeTrack } }) => ({
    tracksList,
    activeTrack,
});

const mapDispatchToProps = ({ musicModal: { setActiveTrack } }) => ({
    setActiveTrack,
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Playbacks);
