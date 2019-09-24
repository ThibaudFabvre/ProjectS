import React from 'react';
import { StyledTitle } from './Header.styled';

export const Header = ({content}) => {
    return(
        <StyledTitle>{content}</StyledTitle>
    );
}
