import React, { useState, useEffect } from 'react';
import { StyledTopArrow } from './TopArrow.style';

const TopArrow = ({ scrollTop }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const listenToScroll = () => setVisible(window.pageYOffset > 50);

        window.addEventListener('scroll', listenToScroll);

        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <StyledTopArrow onClick={scrollTop} visible={visible}>
            ^
        </StyledTopArrow>
    );
};

export default TopArrow;
