import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const StyledTitle = styled.p`
    font-size: 4rem;
    color: #f5f5f2;
    font-weight: 600;
    margin: 20px 20px;

    text-rendering: optimizeLegibility;

    text-shadow: 
      4px 4px 0px #636362, 
      7px 7px 0px rgba(0, 0, 0, 0.2);

    @media ${device.mobileS} {
        font-size: 2rem;
        text-shadow: 
          2px 2px 0px #636362, 
          5px 5px 0px rgba(0, 0, 0, 0.2);
    }
    @media ${device.mobileM} {
        font-size: 2.5rem;
        text-shadow: 
          2px 2px 0px #636362, 
          5px 5px 0px rgba(0, 0, 0, 0.2);
    }
    @media ${device.mobileL} {
        font-size: 3rem;
        text-shadow: 
          3px 3px 0px #636362, 
          6px 6px 0px rgba(0, 0, 0, 0.2);
    }
    @media ${device.tablet} {
        font-size: 4rem;
    }
`;