import React, { useState } from 'react';
import detectBrowserLanguage from 'detect-browser-language';
import LocaleContext from '../../context/LocaleContext';
import { isSupported } from '../../constants/Locale';
import {
    Header,
    Landing,
    LandingWIP,
    JoinUs,
    Gallery,
    Accomodation,
    Rsvp
} from '../../views';

const Home = () => {
    const isWIP = false;
    const lang = isSupported(detectBrowserLanguage().split('-')[0]);
    const [language, setLanguage] = useState(lang);

    const changeLanguage = lang => {
        setLanguage(lang);
    };

    if (isWIP) {
        return <LandingWIP />;
    }

    return (
        <LocaleContext.Provider value={language}>
            <Header language={language} changeLanguage={changeLanguage} />
            <Landing />
            <JoinUs />
            <Gallery />
            <Accomodation />
            <Rsvp />
        </LocaleContext.Provider>
    );
};

export default Home;
