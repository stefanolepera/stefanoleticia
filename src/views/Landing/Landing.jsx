import React from 'react';
import CTA from '../../components/CTA/CTA';
import Title from './components/Title/Title';
import { StyledLanding } from './Landing.style';

const Landing = () => {
    return (
        <StyledLanding>
            <Title>20 - 06 - 2020</Title>
            <CTA text={'RSVP'} />
        </StyledLanding>
    );
};

export default Landing;
