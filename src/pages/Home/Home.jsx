import React, { useState } from 'react';
import detectBrowserLanguage from 'detect-browser-language';
import LocaleContext from '../../context/LocaleContext';
import { animateScroll as scroll } from 'react-scroll';
import { isSupported } from '../../constants/Locale';
import { TopArrow } from '../../components';
import {
    Header,
    Landing,
    LandingWIP,
    Location,
    Gallery,
    Accomodation,
    Gift,
    Rsvp,
    Footer
} from '../../views';

const Home = () => {
    const isWIP = false;
    const lang = isSupported(detectBrowserLanguage().split('-')[0]);
    const [language, setLanguage] = useState(lang);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    if (isWIP) {
        return <LandingWIP />;
    }

    return (
        <LocaleContext.Provider value={language}>
            <Header language={language} changeLanguage={changeLanguage} />
            <Landing />
            <Location />
            <Gallery />
            <Accomodation />
            <Gift />
            <Rsvp />
            <Footer />
            <TopArrow scrollTop={scrollToTop} />
        </LocaleContext.Provider>
    );
};

export default Home;
