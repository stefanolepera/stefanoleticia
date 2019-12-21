import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
`;

export const StyledTitle = styled.p`
    font-size: 1.2rem;
    font-smooth: always;
    font-weight: 600;
`;

export const StyledDescription = styled.p`
    margin: 0 20px;
    font-smooth: always;
    color: #767878;
`;

export const StyledLink = styled.p`
    color: #C51162;
    font-smooth: always;
    font-weight: 500;

    :hover {
        text-decoration: underline;
    }
`;