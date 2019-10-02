import React from 'react';
import { StyledMusicPage, StyledHeader, StyledBody, StyledFooter } from './music.styled';

import Library from './Library';
import Playbacks from './Playbacks';
import OverallTracksManager from './OverallTracksManager';

const MusicApp = () => (
    <StyledMusicPage>
        <StyledHeader>
            <Library />
        </StyledHeader>
        <StyledBody>
            <Playbacks />
        </StyledBody>
        <StyledFooter>
            <OverallTracksManager />
        </StyledFooter>
    </StyledMusicPage>
);

/**
 * Export
 */

export default MusicApp;
