import React from 'react';
import { StyledRsvpListItem } from './RsvpListItem.style';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { dashboardLocale } from '../../../../constants/Locale';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 600
    }
});

const RsvpListItem = ({ data }) => {
    const classes = useStyles();

    return (
        <StyledRsvpListItem>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {Object.values(dashboardLocale).map(cell => (
                                <StyledTableCell align="center" key={cell}>
                                    {cell}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.values(data).map(row => (
                            <StyledTableRow key={row.time}>
                                <StyledTableCell component="th" scope="row">
                                    {row.firstName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.lastName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.email}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.attending}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.others}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.notes}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.time}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledRsvpListItem>
    );

    // return (
    //     <StyledRsvpListItem>
    //         <Paper style={{ padding: 24 }}>
    //             {Object.entries(data).map(item => {
    //                 return (
    //                     <Grid
    //                         container
    //                         alignItems="flex-start"
    //                         spacing={2}
    //                         key={item[0]}
    //                     >
    //                         <Grid item xs={6}>
    //                             <div>{item[0]}</div>
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <div>{item[1]}</div>
    //                         </Grid>
    //                     </Grid>
    //                 );
    //             })}
    //         </Paper>
    //     </StyledRsvpListItem>
    // );
};

export default RsvpListItem;
