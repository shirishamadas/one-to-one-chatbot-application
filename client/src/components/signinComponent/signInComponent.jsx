import React, { useContext } from "react";
import QRCode from "react-qr-code";
import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from "../../context/AccountProvider";
import { clientId } from "../constants/data";

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        padding : '56px 0px 56px 56px'
    },
    qrcode: {
        height: 264,
        width: 264,
        padding: '50px 0 0 50px'
    },
    title:{
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontWeight: 300
    },
    list: {
        '& > *': {
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})

const style = {
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
    }
}

function Signin({ classes }){
    const classname = useStyles();
    const { account, setAccount} = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        setAccount(res.profileObj);
    }

    const onLoginFailure = (res) => {
        console.log('res',res)
        console.log(" login failure");
    }

    return (
        <Dialog
            open={true}
            classes = {{ paper: classes.dialogPaper}}
            BackdropProps = {{ style: { backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className = {classname.leftComponent}>
                    <Typography className={classname.title}>To use Whatsapp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position: 'relative'}}>
                    <QRCode value="hey" className={classname.qrcode}/>
                    <Box style={{position: 'absolute', left: '50%', top: '50%'}}>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText=""
                            isSignedIn={true}
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>

                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(Signin);