// --- Post bootstrap -----
import React, { useState } from 'react';
import detectBrowserLanguage from 'detect-browser-language';
import LocaleContext from '../../context/LocaleContext';
// import ProductCategories from './modules/views/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import AppFooter from './modules/views/AppFooter';
// import ProductHero from './modules/views/ProductHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
import { Header, Landing, LandingWIP, JoinUs } from '../../views';

const Home = () => {
    const isWIP = false;
    const lang = detectBrowserLanguage().split('-')[0];
    const [language, setLanguage] = useState(lang);

    const changeLanguage = lang => {
        console.log('lang', lang);
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
            {/* <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
            <AppFooter /> */}
        </LocaleContext.Provider>
    );
};

export default Home;
