import styled from 'styled-components';
import { device } from '../../constants/Devices';

export const StyledTitle = styled.h1`
    font-size: 3rem;
    font-family: 'Kaushan Script', cursive;

    @media ${device.mobileS} {
        font-size: 2.5rem;
    }

    @media ${device.tablet} {
        font-size: 3rem;
    }
`;
