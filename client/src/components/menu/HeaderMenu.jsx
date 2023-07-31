import React, { useState,useContext } from "react";

import { CallMissedSharp, MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import InfoDrawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
})


const HeaderMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { setAccount} = useContext(AccountContext);
    const [Draweropen, setOPenDrawer] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = () => {
        alert("you have been logged out succesfully")
        console.clear();
        setAccount('');
    }

    const toggleopen = () => {
        setOPenDrawer(true);
    }

    return (
        <>
            <MoreVert onClick={handleOpen} />
            <Menu
                id="simple-menu"
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl = {null}
                anchorOrigin = {{
                    vertical: 'bottom',
                    horizontal: 'center',

                }}
                transformOrigin = {{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={() => {handleClose();toggleopen()}}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        cookiePolicy={'single_host_origin'}
                        className = {classes.logout}
                    >

                    </GoogleLogout>
                </MenuItem>
            </Menu>
            <InfoDrawer open={Draweropen} setOpen={setOPenDrawer} />
        </>
    )
}

export default HeaderMenu;