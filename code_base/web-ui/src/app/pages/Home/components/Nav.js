import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Toolbar, Link } from '@material-ui/core';
import {toAbsoluteUrl} from '../../../utils/utils'
import ReactLogo from '../../../assets/svg/home/logo.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        color: '#000',
        width: '100%',
        boxShadow: 'none',
    },
    logo: {
        width: '50%',
        display: "flex",
        alignContent: 'flex-start'
    },
    navContainer: {
        display: "flex",
        float: "right",
        alignContent: 'flex-end',
        position: 'absolute',
        paddingRight: '1em',
        right: 0,
    },
    navItem: {
        fontWeight: 'bold',
        color: "#000",
        display: "flex",
        paddingLeft: "1em",
    }

}));

export default function Nav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [tab, setTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const preventDefault = (event) => event.preventDefault();


    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" style={{boxShadow: 'none'}}>
                <Toolbar>

                    <div className={classes.logo}>
                    <img
                    style={{maxHeight:'50%'}}
                    alt="Logo"
                    src={ReactLogo}
                  />
                </div>
                    <div className={classes.navContainer}>
                        <Link className={classes.navItem} href="#" onClick={preventDefault}>
                            See How It Works
                        </Link>
                        <Link className={classes.navItem}  href="#" onClick={preventDefault}>
                            Contact Us
                        </Link>
                        <Link className={classes.navItem} href="#" onClick={preventDefault}>
                            About Us
                        </Link>
                        {/* <Tabs
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="See How It Works" href="/" />
                    <Tab label="Contact Us" href="/" />
                    <Tab label="About Us" href="/" />

                </Tabs> */}
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    );
}