import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
`;

export const StyledTitle = styled.p`
    width: 316px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const StyledDescription = styled.p`
    margin: 10px 0 20px 20px;
    font-size: 1.1rem;
    text-align: left;
    color: #767878;
`;

export const StyledLink = styled.p`
    width: 316px;
    color: #C51162;
    font-weight: 500;
    text-align: left;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`;