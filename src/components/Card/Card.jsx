import React, { useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { IconInfo } from '../../components';
import {
    StyledCard,
    StyledTitle,
    StyledDescription,
    StyledLink
} from './Card.style';

const Card = ({ content }) => {
    const lang = useContext(LocaleContext);

    const openLink = () => {
        window.open(content.cta, '_blank');
    };

    return (
        <StyledCard>
            <StyledTitle>{content.title[lang]}</StyledTitle>
            {content.time && <IconInfo type={'time'} text={content.time} />}
            <IconInfo type={'address'} text={content.address} />
            <StyledDescription>{content.description[lang]}</StyledDescription>
            <StyledLink onClick={openLink}>{content.mapLink[lang]}</StyledLink>
        </StyledCard>
    );
};

export default Card;
