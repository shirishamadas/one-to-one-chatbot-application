import React,{useContext, useEffect, useState} from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { getConversation, setConservation } from  "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { userContext } from "../../context/UserProvider";

const useStyles = makeStyles({
    component: {
        display:"flex",
        height: 40,
        padding: '13px 0',
        cursor: "pointer"
    },
    displayPicture: {
        width:50,
        height:50,
        borderRadius:'50%',
        padding:"0 14px"
    },
    timestamp:{
        fontSize:12,
        marginLeft: 'auto',
        marginRight:20,
        color: "#00000099"
    },
    text:{
        color: 'rgba(0,0,0,0.6)',
        fontSize: 14
    }
})

const Conversationcard = ( { users } ) => {
    console.log(users)
    const classes = useStyles();
    const { account, newMessageFlag} = useContext(AccountContext)
    const { setPerson } = useContext(userContext)
    const URL = users.imageUrl;
    const [message,setMessage] = useState({})

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({sender: account.googleId, receiver: users.googleId});
            setMessage({text: data.message, timestamp: data.updatedAt});
        }
        getConversationMessage();
    },[newMessageFlag])
    const setUser = async () =>{
        setPerson(users);
        await setConservation({ senderId: account.googleId, receiverId: users.googleId });
    }
    return (
        <Box className={classes.component} onClick={setUser}>
            <Box>
                <img src= {URL} className={classes.displayPicture} alt="display-picture"/>
            </Box>
            <Box style={{width:"100%"}}>
                <Box style={{display: 'flex'}}>
                    <Typography>{users.name}</Typography>
                    {
                        message.text &&
                            <Typography className={classes.timestamp}>
                                {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}
                            </Typography>
                    }
                </Box>
                <Box>
                    <Typography className={classes.text}>{message.text}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Conversationcard;