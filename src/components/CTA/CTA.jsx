import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { StyledLinkContainer } from './CTA.style';

const useStyles = makeStyles(theme => ({
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

const CTA = ({ text }) => {
    const classes = useStyles();
    return (
        <StyledLinkContainer>
            <Link
                activeClass="active"
                to="rsvp"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.margin}
                >
                    {text}
                </Button>
            </Link>
        </StyledLinkContainer>
    );
};

export default CTA;
