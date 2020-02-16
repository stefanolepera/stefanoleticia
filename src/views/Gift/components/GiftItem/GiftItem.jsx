import React from 'react';
import { StyledTitle, StyledText, StyledLink } from './GiftItem.style';
import { Paper, Grid } from '@material-ui/core';

const GiftITem = ({ giftDetails }) => {
    return (
        <div id="gift">
            <Paper style={{ padding: 32, margin: 10 }}>
                <StyledTitle>{giftDetails.title}</StyledTitle>
                <hr />
                {giftDetails.address && (
                    <Grid container alignItems="flex-start" spacing={1}>
                        <Grid item xs={3}>
                            <StyledText>Address: </StyledText>
                        </Grid>
                        <Grid item xs={3}>
                            <StyledText>
                                <StyledLink
                                    href={giftDetails.url}
                                    target="_blank"
                                >
                                    {giftDetails.address}
                                </StyledLink>
                            </StyledText>
                        </Grid>
                    </Grid>
                )}
                {giftDetails.name && (
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <StyledText>Name: </StyledText>
                        </Grid>
                        <Grid item xs={6}>
                            <StyledText>{giftDetails.name}</StyledText>
                        </Grid>
                    </Grid>
                )}
                {giftDetails.bank && (
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <StyledText>Bank: </StyledText>
                        </Grid>
                        <Grid item xs={6}>
                            <StyledText>{giftDetails.bank}</StyledText>
                        </Grid>
                    </Grid>
                )}
                {giftDetails.account && (
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={4}>
                            <StyledText>Account: </StyledText>
                        </Grid>
                        <Grid item xs={4}>
                            <StyledText>{giftDetails.account}</StyledText>
                        </Grid>
                    </Grid>
                )}
                {giftDetails.sortCode && (
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={4}>
                            <StyledText>Sort Code: </StyledText>
                        </Grid>
                        <Grid item xs={4}>
                            <StyledText>{giftDetails.sortCode}</StyledText>
                        </Grid>
                    </Grid>
                )}
                {giftDetails.IBAN && (
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <StyledText>IBAN: </StyledText>
                        </Grid>
                        <Grid item xs={6}>
                            <StyledText>{giftDetails.IBAN}</StyledText>
                        </Grid>
                    </Grid>
                )}
            </Paper>
        </div>
    );
};

export default GiftITem;
