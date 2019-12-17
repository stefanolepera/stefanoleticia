import React from 'react';
import { StyledFlags, StyledFlag } from './Flags.style';
import { languages } from '../../constants/locale';

const Flags = ({ language, changeLanguage }) => {
    return (
        <StyledFlags>
            {languages.map(lang => {
                return (
                    <StyledFlag
                        enabled={language === lang}
                        src={`images/flags/${lang}.png`}
                        alt={lang}
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                    />
                );
            })}
        </StyledFlags>
    );
};

export default Flags;
