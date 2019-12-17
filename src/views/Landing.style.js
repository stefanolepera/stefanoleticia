import styled from 'styled-components';

export const StyledLanding = styled.div`
    height: 80vh;
    max-height: 1300px;
    min-height: 500px;
    background-image: url("images/landing.jpg");
    background-position: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;

    :before{
        background-color: rgba(0, 0, 0, 0.5);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
      }
`;