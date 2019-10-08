import styled from 'styled-components';
import { listElementCoreStyle } from 'src/styles/themes';

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0.5rem 0.2rem #555;
    position: absolute;
    left: 5rem;
    margin-top: 1rem;
    border: none;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    font-size: 1rem;
`;

export const StyledArrowElement = styled.li`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    ${listElementCoreStyle}
`;

export const StyledTracksManager = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 4rem;
    width: 20rem;
`;

export const StyledNoList = styled.li`
    text-align: center;
    ${listElementCoreStyle}
`;
export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;

    li:last-child {
        border-radius: 0 0 1rem 1rem;
    }
`;
