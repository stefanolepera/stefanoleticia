import React, { useContext } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { StyledNavBar, StyledLinkContainer } from './NavBar.style';
import { navLocale } from '../../../../constants/Locale';
import { sections } from '../../../../constants/Config';
import LocaleContext from '../../../../context/LocaleContext';

const NavBar = () => {
    const lang = useContext(LocaleContext);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <StyledNavBar>
            {sections.map((section, index) => {
                return (
                    <StyledLinkContainer key={sections[index]}>
                        <Link
                            activeClass="active"
                            to={sections[index]}
                            spy={true}
                            smooth={true}
                            offset={sections[index] !== 'gift' ? -70 : -330}
                            duration={500}
                        >
                            {navLocale[section][lang]}
                        </Link>
                    </StyledLinkContainer>
                );
            })}
        </StyledNavBar>
    );
};

export default NavBar;
