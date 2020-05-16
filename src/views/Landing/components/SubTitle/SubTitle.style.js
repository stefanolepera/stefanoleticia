import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const SubTitleWrapper = styled.p`
    font-size: 3rem;
    color: #f5f5f2;
    font-weight: 400;
    margin: 20px 20px;
    max-width: 1000px;

    text-shadow: 
      4px 4px 0px #636362, 
      7px 7px 0px rgba(0, 0, 0, 0.2);

    text-rendering: optimizeLegibility;

    @media ${device.mobileS} {
        font-size: 1.2rem;
        text-shadow: 
          2px 2px 0px #636362, 
          5px 5px 0px rgba(0, 0, 0, 0.2);
    }
    @media ${device.mobileM} {
        font-size: 1.5rem;
        text-shadow: 
          2px 2px 0px #636362, 
          5px 5px 0px rgba(0, 0, 0, 0.2);
    }
    @media ${device.mobileL} {
        font-size: 2rem;
        text-shadow: 
          2px 2px 0px #636362, 
          5px 5px 0px rgba(0, 0, 0, 0.2);
    }
    @media ${device.tablet} {
        font-size: 3rem;
        text-shadow: 
          2px 2px 0px #636362, 
          5px 5px 0px rgba(0, 0, 0, 0.2);
    }
`;