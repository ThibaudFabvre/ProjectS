import React from 'react';
import Category from './Category';

import { StyledList } from './list.styled';

export const List = ({ categories }) => {
    return (
        <StyledList>
            {categories.map(category =>
                <Category name={category.name} sections={category.sections}/>
            )}
        </StyledList>
    );
}
