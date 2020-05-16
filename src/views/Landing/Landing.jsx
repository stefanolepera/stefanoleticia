import React from 'react';
import { CTA } from '../../components';
import { Title } from './components';
import { StyledLanding } from './Landing.style';

const Landing = () => {
    return (
        <StyledLanding id="section1">
            <Title text={'29 - 05 - 2021'} />
            <CTA text={'RSVP'} />
        </StyledLanding>
    );
};

export default Landing;
