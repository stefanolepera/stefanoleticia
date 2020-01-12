import styled from 'styled-components';

export const StyledPhotoGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    align-items: flex-start;
    justify-content: space-evenly;
`;

export const StyleImage = styled.img`
    margin: 5px 0;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
    cursor: pointer;

    :hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    }
`;
