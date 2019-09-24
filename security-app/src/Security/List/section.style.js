import styled from 'styled-components';


export const StyledSection = styled.div`
`;

export const StyledSectionHeader = styled.h3`
    text-align: center;
    font-weight: bold;
    background-color: lightGrey;
    border: 0.1rem solid grey;
    width: 10rem;
`;

export const StyledListElement = styled.li`
    display: flex;
    > span, h4 {
        width: 50%;
    }
    padding-top: 0.2rem;
`;