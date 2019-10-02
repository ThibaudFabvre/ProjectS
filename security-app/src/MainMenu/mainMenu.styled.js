import styled, { css } from 'styled-components';
import { Button } from 'src/components/atoms';

const mainBackground = css`
    border: none;
    background: radial-gradient(circle, rgba(255, 156, 0, 1) 0%, rgba(255, 177, 0, 1) 35%, rgba(254, 255, 0, 1) 100%);
    box-shadow: 0 0 0.5rem 0.2rem #ddd;
`;

export const StyledNavSwitch = styled.nav`
    position: absolute;
    height: 16rem;
    width: 16rem;
    ${mainBackground}
    color: #ffffff;
    border-radius: 50%;
    top: calc(50% - 10rem);
    left: calc(50% - 8rem);
    padding: 5.5rem;
    text-align: center;
    font-weight: bolder;
    font-size: 4rem;
`;

export const StyledAppButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    color: #ffffff;
    ${mainBackground}
    left: calc(50% - 3rem);
    top: calc(50% - 3rem);
    position: absolute;
    font-size: 3rem;

    &.hide {
        visibility: hidden;
    }
    > a {
        position: absolute;
    }
`;
