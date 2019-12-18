import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    margin: {
        marginTop: 'auto',
        marginBottom: '20px'
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

const CTA = ({ text }) => {
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.margin}
        >
            {text}
        </Button>
    );
};

export default CTA;
