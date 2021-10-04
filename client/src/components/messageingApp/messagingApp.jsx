import {AppBar,makeStyles} from '@material-ui/core';
import ChatBot from '../chatBot/chatBot';

const mystyle = makeStyles({
    Header: {
        height:150,
        background: '#30ba57',
    }
}) 

function MessageingApp(){
    const classes = mystyle()
    return (
        <>
            <AppBar className={classes.Header} >
                <ChatBot />
            </AppBar>
        </>
    )
}

export default MessageingApp;