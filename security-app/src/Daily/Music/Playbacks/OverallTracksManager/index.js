/**
 * NPM / Yarn imports
 */
import React from 'react';

/**
 * Local imports
 */

import { StyledOverallButton, StyledTrackManager } from './overallTracksManager.styled';

/**
 * Component
 */
class OverallTracksManager extends React.Component {
    state = {
        playing: false,
    };

    /**
     * Handlers
     */
    playAllTracks = (evt) => {
        const tracks = evt.target;
        for (let x = 0; x < tracks.length; x += 1) {
            tracks[x].play();
        }
        this.setState({ playing: true });
    };

    pauseAllTracks = (evt) => {
        const tracks = evt.target;
        for (let x = 0; x < tracks.length; x += 1) {
            tracks[x].pause();
        }
        this.setState({ playing: false });
    };

    resetAllTracks = (evt) => {
        const tracks = evt.target;
        for (let x = 0; x < tracks.length; x += 1) {
            tracks[x].currentTime = 0;
            this.pauseAllTracks();
        }
        this.setState({ playing: false });
    };

    render() {
        const { playing } = this.state;
        return (
            <StyledTrackManager>
                <StyledOverallButton type="button" playing={playing} onClick={this.playAllTracks}>
                    PLAY
                </StyledOverallButton>
                <StyledOverallButton type="button" playing={playing} onClick={this.pauseAllTracks}>
                    PAUSE
                </StyledOverallButton>
                <StyledOverallButton type="button" onClick={this.resetAllTracks}>
                    RESET
                </StyledOverallButton>
            </StyledTrackManager>
        );
    }
}

/**
 * Export
 */

export default OverallTracksManager;
