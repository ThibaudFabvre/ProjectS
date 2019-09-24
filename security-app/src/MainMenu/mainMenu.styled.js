import styled from 'styled-components';
import { Button } from 'src/components/atoms';

export const StyledNavSwitch = styled.nav`
    position: absolute;
    height: 16rem;
    width: 16rem;
    background: #d0a453;
    border: 0.2rem solid #473715;
    color: #ffffff;
    border-radius: 50%;
    top: calc(50% - 10rem);
    left: calc(50% - 8rem);
    padding: 7.5rem 5rem;
    text-align: center;
    font-weight: bolder;
`;

export const StyledAppButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    color: #ffffff;
    border: 0.2rem solid #473715;
    background-color: #a26f01;
    left: calc(50% - 3rem);
    top: calc(50% - 3rem);
    position: absolute;

    &.hide {
        visibility: hidden;
    }
    > a {
        position: absolute;
    }
`;
