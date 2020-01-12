import React, { useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { StyledAccomodation } from './Accomodation.style';
import { CardContainer, Title, SubTitle } from '../../components';
import { accomodationLocale } from '../../constants/Locale';

const Accomodation = () => {
    const lang = useContext(LocaleContext);
    return (
        <StyledAccomodation>
            <Title text={accomodationLocale.title[lang]} />
            <SubTitle text={accomodationLocale.intro[lang]} />
            <CardContainer content={accomodationLocale.cards.verdeborgo} />
            <CardContainer content={accomodationLocale.cards.pool} />
        </StyledAccomodation>
    );
};

export default Accomodation;
