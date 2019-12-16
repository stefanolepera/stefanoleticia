import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React, { useState } from 'react';
// import ProductCategories from './modules/views/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import AppFooter from './modules/views/AppFooter';
// import ProductHero from './modules/views/ProductHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
import HeaderBar from '../views/HeaderBar';
import Landing from '../views/Landing';

const Home = () => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = lang => {
        console.log('lang', lang);
        setLanguage(lang);
    };

    return (
        <>
            <HeaderBar changeLanguage={changeLanguage} />
            <Landing />
            {/* <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
            <AppFooter /> */}
        </>
    );
};

export default withRoot(Home);
