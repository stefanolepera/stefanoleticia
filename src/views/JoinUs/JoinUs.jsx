import React, { useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { StyledJoinUs } from './JoinUs.style';
import { CardContainer, Title, SubTitle } from '../../components';
import { joinUsLocale } from '../../constants/Locale';

const JoinUs = () => {
    const lang = useContext(LocaleContext);
    return (
        <StyledJoinUs>
            <Title text={joinUsLocale.title[lang]} />
            <SubTitle text={joinUsLocale.intro[lang]} />
            <CardContainer content={joinUsLocale.cards.location} />
            <CardContainer content={joinUsLocale.cards.pool} />
        </StyledJoinUs>
    );
};

export default JoinUs;
