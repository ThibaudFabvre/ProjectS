import styled from 'styled-components';

export const StyledOverallButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ playing }) => (playing ? 'background-color: #faa803;' : 'background-color: rgb(194, 194, 194);')}
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 0.5rem 0.2rem #555;
    height: 4rem;
    width: 4rem;
    font-size: 3em;
`;

export const StyledTrackManager = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 30rem;
`;
