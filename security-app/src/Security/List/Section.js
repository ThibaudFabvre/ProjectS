import React from 'react';
import { Span, Title } from 'src/components/atoms/';

import { StyledSection, StyledSectionHeader, StyledListElement } from './section.style';

const Section = ({ name, contents }) => {
    return (
        <StyledSection>
            <StyledSectionHeader>{name}</StyledSectionHeader>
            <ul>
                <StyledListElement>
                    <Title text="Username" />
                    <Title text="Password" />
                </StyledListElement>
                {contents.map((content) => (
                    <StyledListElement>
                        <Span text={content.username} />
                        <Span text={content.password} />
                    </StyledListElement>
                ))}
            </ul>
        </StyledSection>
    );
};

export default Section;
