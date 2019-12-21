import styled from 'styled-components';
import { device } from '../../constants/Devices';

export const StyledCardContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;