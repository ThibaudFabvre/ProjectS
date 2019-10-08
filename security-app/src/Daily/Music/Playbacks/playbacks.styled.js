import styled from 'styled-components';

export const StyledSection = styled.div`
    width: 25%;
`;

export const StyledVolumeManager = styled(StyledSection)`
    display: flex;
    justify-content: center;
`;

export const StyledTrackManager = styled(StyledSection)`
    width: 50%;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    backround-color: #aaa;
    border-radius: 50%;
    border: none;
`;
