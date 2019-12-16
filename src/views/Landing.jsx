import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import LandingLayout from './LandingLayout';

const backgroundImage = 'images/landing.jpg';

const styles = theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center'
    },
    button: {
        minWidth: 200
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10)
        }
    },
    more: {
        marginTop: theme.spacing(2)
    }
});

const Landing = props => {
    const { classes } = props;

    return (
        <LandingLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography
                color="inherit"
                align="center"
                variant="h2"
                marked="center"
            >
                Stefano & Leticia
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                className={classes.h5}
            >
                20-06-2020, Italy
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="small"
                className={classes.button}
                component="a"
                href="/premium-themes/onepirate/sign-up/"
            >
                RSVP
            </Button>
        </LandingLayout>
    );
};

Landing.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
