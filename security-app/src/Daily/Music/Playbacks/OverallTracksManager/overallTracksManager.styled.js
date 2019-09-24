import styled from 'styled-components';
import { thinBorder } from 'src/styles/themes';

export const StyledOverallButton = styled.button`
    ${({ playing }) => (playing ? 'background-color: rgb(131, 202, 0);' : 'background-color: rgb(194, 194, 194);')}
    border: ${thinBorder};
`;

export const StyledTrackManager = styled.div`
    border-bottom: ${thinBorder};
`;
