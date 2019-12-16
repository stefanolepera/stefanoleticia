import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = theme => ({
    title: {
        fontSize: 24
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between'
    },
    left: {
        flex: 1
    },
    leftLinkActive: {
        color: theme.palette.common.white
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3)
    },
    linkSecondary: {
        color: theme.palette.secondary.main
    }
});

const HeaderBar = props => {
    const { changeLanguage, classes } = props;

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.marginLeft} />
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/premium-themes/onepirate/"
                    >
                        {'onepirate'}
                    </Link>
                    <div className={classes.right}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            onClick={() => changeLanguage('br')}
                            className={classes.rightLink}
                        >
                            <img alt="Brazil" src="images/flags/Brazil.png" />
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            onClick={() => changeLanguage('en')}
                            className={classes.linkSecondary}
                        >
                            <img
                                alt="United Kingdom"
                                src="images/flags/United-Kingdom.png"
                            />
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            onClick={() => changeLanguage('it')}
                            className={classes.linkSecondary}
                        >
                            <img alt="Italy" src="images/flags/Italy.png" />
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            onClick={() => changeLanguage('es')}
                            className={classes.linkSecondary}
                        >
                            <img alt="Spain" src="images/flags/Spain.png" />
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
};

HeaderBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
