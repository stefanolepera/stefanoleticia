import React from 'react';
import { Card } from '../../components';
import { StyledCardContainer } from './CardContainer.style';

const CardContainer = ({ content }) => {
    return (
        <StyledCardContainer>
            <img src={`images/${content.img}`} alt="location" />
            <Card content={content} />
        </StyledCardContainer>
    );
};

export default CardContainer;
