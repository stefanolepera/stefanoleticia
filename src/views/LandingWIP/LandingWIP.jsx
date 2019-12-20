import React from 'react';
import { Title } from '../Landing/components';
import { StyledLanding } from './LandingWIP.style';

const Landing = () => {
    return (
        <StyledLanding>
            <Title text={'20 - 06 - 2020'} />
            <Title text={'Work in Progress'} />
        </StyledLanding>
    );
};

export default Landing;
