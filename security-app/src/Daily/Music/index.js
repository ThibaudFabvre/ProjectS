import React from 'react';
import { StyledMusicPage } from './music.styled';

import Uploads from './Uploads';
import Playbacks from './Playbacks';

const MusicApp = () => (
    <StyledMusicPage>
        <Uploads />
        <Playbacks />
    </StyledMusicPage>
);

/**
 * Export
 */

export default MusicApp;
