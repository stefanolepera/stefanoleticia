import React from 'react';
import { AccessTime, PinDrop } from '@material-ui/icons';
import {
    StyledIconInfo,
    StyledIconContainer,
    StyledDescription
} from './IconInfo.style';

const IconInfo = ({ type, text }) => {
    return (
        <StyledIconInfo>
            {type === 'time' ? (
                <StyledIconContainer>
                    <AccessTime />
                    <StyledDescription>{text}</StyledDescription>
                </StyledIconContainer>
            ) : (
                <StyledIconContainer>
                    <PinDrop />
                    <StyledDescription>{text}</StyledDescription>
                </StyledIconContainer>
            )}
        </StyledIconInfo>
    );
};

export default IconInfo;
