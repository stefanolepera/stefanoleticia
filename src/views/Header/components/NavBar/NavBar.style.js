import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const StyledNavBar = styled.nav`
    color: white;
    display: none;
    width: 500px;
    margin-left: 20px;

    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
    }
`;

export const StyledLinkContainer = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-family: 'Kaushan Script', cursive;
    cursor: pointer;
`;