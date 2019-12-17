import React from 'react';
import Logo from '../components/Logo/Logo';
import Flags from '../components/Flags/Flags';
import { StyledHeader } from './Header.style';

const Header = ({ language, changeLanguage }) => {
    return (
        <StyledHeader>
            <Logo />
            <Flags language={language} changeLanguage={changeLanguage} />
        </StyledHeader>
    );
};

export default Header;
