import React, { useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { StyledJoinUs } from './Location.style';
import { CardContainer, Title, SubTitle } from '../../components';
import { locationLocale } from '../../constants/Locale';

const JoinUs = () => {
    const lang = useContext(LocaleContext);
    return (
        <StyledJoinUs id="location">
            <Title text={locationLocale.title[lang]} />
            <SubTitle text={locationLocale.intro[lang]} />
            <CardContainer content={locationLocale.cards.location} />
            <CardContainer content={locationLocale.cards.pool} />
        </StyledJoinUs>
    );
};

export default JoinUs;
