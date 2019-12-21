import React, { useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { StyledJoinUs } from './JoinUs.style';
import { SubTitle } from './components';
import { CardContainer } from '../../components';
import { joinUsLocale } from '../../constants/Locale';

const JoinUs = () => {
    const lang = useContext(LocaleContext);
    return (
        <StyledJoinUs>
            <SubTitle text={joinUsLocale.intro[lang]} />
            <CardContainer content={joinUsLocale.cards.location} />
            <CardContainer content={joinUsLocale.cards.pool} />
        </StyledJoinUs>
    );
};

export default JoinUs;
