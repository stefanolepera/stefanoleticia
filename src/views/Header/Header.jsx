import React from 'react';
import { NavBar, Drawer, Flags } from './components/';
import { StyledHeader } from './Header.style';

const Header = ({ language, changeLanguage }) => {
    return (
        <StyledHeader>
            <Drawer />
            <NavBar />
            <Flags language={language} changeLanguage={changeLanguage} />
        </StyledHeader>
    );
};

export default Header;
