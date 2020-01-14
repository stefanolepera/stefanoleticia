import React, { useState, useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import firebase from '../../services/firebase';
import { Title, SubTitle } from '../../components';
import { RsvpForm } from './components';
import { StyledRsvp, StyledP } from './Rsvp.style';
import { rsvpLocale } from '../../constants/Locale';

const Rsvp = () => {
    const [submitted, setSubmitted] = useState(false);
    const lang = useContext(LocaleContext);

    const handleSubmit = values => {
        const itemToSend = {
            time: new Date().toLocaleString('en-gb')
        };
        Object.entries(values).map(value => (itemToSend[value[0]] = value[1]));
        firebase.writeTo('messages', itemToSend);
        setSubmitted(true);
    };

    return (
        <StyledRsvp>
            <Title text={rsvpLocale.title} />
            <SubTitle text={rsvpLocale.intro[lang]} />
            <StyledP>{rsvpLocale.subIntro[lang]}</StyledP>
            {submitted ? (
                <SubTitle text={rsvpLocale.submitted[lang]} />
            ) : (
                <RsvpForm handleSubmit={handleSubmit} />
            )}
        </StyledRsvp>
    );
};

export default Rsvp;
