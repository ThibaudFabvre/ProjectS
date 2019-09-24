import styled from 'styled-components';
import { thinBorder } from 'src/styles/themes';

export const StyledList = styled.li`
    display: flex;
    height: 20rem;
    width: 100 %;
    border: ${thinBorder};
`;

export const StyledListManager = styled.div`
    width: 45 %;
    border-right: ${thinBorder};
`;

export const StyledListName = styled.h3`
    height: 20 %;
    padding: 1rem 0;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
`;

export const StyledListConfigurations = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80 %;
`;

export const StyledListButtons = styled.ul`
    padding: 5rem 0;
`;

export const StyledListButton = styled.li`
    @include standard-button;
`;

export const StyledListVolume = styled.div`
    display: flex;
    flex-direction: column;
    width: 8rem;
    align-items: center;
    padding: 1rem 0;
`;

export const StyledListVolumeIdentifier = styled.span`
    color: #fff;
`;

export const StyledListVolumeInput = styled.input`
    width: 10rem;
    height: 10rem;
    transform: rotate(270deg);
    margin-top: 1rem;
`;

export const StyledListDisplay = styled.div`
    padding: 9rem 6rem;
    color: white;
`;

export const StyledListPlayer = styled.audio`
    width: 20rem;
`;
