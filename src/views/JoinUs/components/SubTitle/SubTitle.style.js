import styled from 'styled-components';
import { device } from '../../../../constants/Devices';

export const SubTitleWrapper = styled.p`
font-size: 2rem;
color: #000;
font-weight: 400;
margin: 20px 20px;

text-rendering: optimizeLegibility;

@media ${device.mobileS} {
    font-size: 1rem;
}
@media ${device.mobileM} {
    font-size: 1.2rem;
}
@media ${device.mobileL} {
    font-size: 1.5rem;
}
@media ${device.tablet} {
    font-size: 2rem;
}
`;