import styled from 'styled-components';
import { listElementCoreStyle } from 'src/styles/themes';

export const StyledElementDetail = styled.span``;

export const StyledListElement = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    ${listElementCoreStyle}
`;
