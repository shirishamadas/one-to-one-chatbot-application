import React, { useContext} from 'react';
import {AppBar, makeStyles, Box, Toolbar} from '@material-ui/core';
import ChatBot from '../chatBot/chatBot';
import Signin from '../signinComponent/signInComponent';
import { AccountContext } from '../../context/AccountProvider';

const mystyle = makeStyles({
    component: {
        background: '#DCDCDC',
        height: '100vh'
    },
    loginHeader: {
        height:200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    header: {
        height:115,
        background: '#00bfa5',
        boxShadow: 'none'
    }
}) 

function MessageingApp(){
    const classes = mystyle();
    const { account } = useContext(AccountContext);
    return (
        <Box className={classes.component}>
            <AppBar className={account? classes.header: classes.loginHeader} >
                <Toolbar></Toolbar>
            </AppBar>
            {account? <ChatBot />: <Signin/>}
        </Box>
    )
}

export default MessageingApp;