import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WeekendIcon from '@material-ui/icons/Weekend';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import ContactMail from '@material-ui/icons/ContactMail';
import Menu from '@material-ui/icons/Menu';
import LocaleContext from '../../../../context/LocaleContext';
import { navLocale } from '../../../../constants/Locale';
import { sections } from '../../../../constants/Config';
import { StyledDrawer } from './Drawer.style';

const useStyles = makeStyles({
    list: {
        width: 220
    },
    fullList: {
        width: 'auto'
    }
});

const icons = [
    <LoyaltyIcon />,
    <PhotoCamera />,
    <WeekendIcon />,
    <CardGiftcard />,
    <ContactMail />
];

export default function TemporaryDrawer() {
    const lang = useContext(LocaleContext);
    const classes = useStyles();
    const [open, setIsOpen] = useState(false);

    const toggleDrawer = open => event => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(true)}
            onKeyDown={toggleDrawer(true)}
        >
            <List>
                {sections.map((section, index) => (
                    <ListItem button key={sections[index]}>
                        <ListItemIcon>{icons[index]}</ListItemIcon>
                        <Link
                            activeClass="active"
                            to={sections[index]}
                            spy={true}
                            smooth={true}
                            offset={sections[index] !== 'gift' ? -70 : -330}
                            duration={500}
                        >
                            <ListItemText
                                primary={navLocale[section][lang]}
                                onClick={toggleDrawer(false)}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <StyledDrawer>
            <Button onClick={toggleDrawer(true)}>
                <ListItemIcon>
                    <Menu fontSize="large" style={{ color: '#ffffff' }} />
                </ListItemIcon>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {sideList()}
            </Drawer>
        </StyledDrawer>
    );
}
