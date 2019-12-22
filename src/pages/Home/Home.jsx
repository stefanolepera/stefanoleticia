import React, { useState } from 'react';
import detectBrowserLanguage from 'detect-browser-language';
import LocaleContext from '../../context/LocaleContext';
import { Header, Landing, LandingWIP, JoinUs } from '../../views';

const Home = () => {
    const isWIP = false;
    const lang = detectBrowserLanguage().split('-')[0];
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
        </LocaleContext.Provider>
    );
};

export default Home;
