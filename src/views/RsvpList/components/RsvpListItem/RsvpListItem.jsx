import React from 'react';
import { StyledRsvpListItem } from './RsvpListItem.style';
import { Paper, Grid } from '@material-ui/core';

const RsvpListItem = ({ data }) => {
    return (
        <StyledRsvpListItem>
            <Paper style={{ padding: 24 }}>
                {Object.entries(data).map(item => {
                    return (
                        <Grid
                            container
                            alignItems="flex-start"
                            spacing={2}
                            key={item[0]}
                        >
                            <Grid item xs={6}>
                                <div>{item[0]}</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>{item[1]}</div>
                            </Grid>
                        </Grid>
                    );
                })}
            </Paper>
        </StyledRsvpListItem>
    );
};

export default RsvpListItem;
