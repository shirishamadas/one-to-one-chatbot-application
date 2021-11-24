import React,{ useContext } from "react";
import { Box, Dialog, withStyles, makeStyles } from "@material-ui/core";
import { userContext } from "../../context/UserProvider";
import Menu from "../menu/Menu";
import Chat from "./chat"
import EmptyChat from './EmptyChat'

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: 380
    },
    rightComponent: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)',
        width: '70%',
        minWidth: 300,
        height: '100%'
    }
})

const style = {
    dialogPaper: {
        height: '95%',
        width: '91%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
    }
}

function ChatBot({ classes }){
    const classname = useStyles();
    const { person } = useContext(userContext);
    return (
        <Dialog
            open = {true}
            classes = {{ paper: classes.dialogPaper}}
            BackdropProps = {{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu />
                </Box>
                <Box className={classname.rightComponent}>
                    {
                        Object.keys(person).length ? <Chat />: <EmptyChat />
                    }
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatBot);