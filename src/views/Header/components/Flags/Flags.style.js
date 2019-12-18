import styled from 'styled-components';

export const StyledFlags = styled.div`
    margin-left: auto;
    margin-right: 10px;
`;

export const StyledFlag = styled.img`
    opacity: ${props => props.enabled ? 1 : 0.5};
    cursor: ${props => props.enabled ? '' : 'pointer'};
    margin: 0 5px;
`;