import React from 'react';
import { Title, SubTitle } from '../Landing/components';
import { StyledLanding } from './LandingWIP.style';

const Landing = () => {
    return (
        <StyledLanding>
            <Title text={'29 - 05 - 2021'} />
            <SubTitle text={'(Due to Covid-19)'} />
        </StyledLanding>
    );
};

export default Landing;
