import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const StyledDrawer = styled.div`
    display: block;

    @media ${device.tablet} {
        display: none;
    }
`;