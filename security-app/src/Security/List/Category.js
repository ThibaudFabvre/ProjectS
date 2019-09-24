import React from 'react';

import Section from './Section';
import { StyledCategory, StyledCategoryHeader, StyledCategoryLayout } from './category.styled';

const Category = ({ name, sections }) => {
    return (
        <StyledCategory>
            <StyledCategoryHeader>{name}</StyledCategoryHeader>
            <StyledCategoryLayout>
                {sections.map((section) => (
                    <Section name={section.name} contents={section.contents} />
                ))}
            </StyledCategoryLayout>
        </StyledCategory>
    );
};

export default Category;
