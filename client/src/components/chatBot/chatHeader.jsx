import { Box, Typography, makeStyles } from "@material-ui/core";
import React,{useContext} from "react";
import { Search, MoreVert } from "@material-ui/icons";

import { userContext } from "../../context/UserProvider";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    header: {
        display: "flex",
        height: 35,
        background: "#ededed",
        padding: "21px 16px",
        alignItems: "center"
    },
    dp:{
        width: 37,
        height:37,
        borderRadius: '50%',
        padding: '0 2px'
    },
    name: {
        marginLeft: 10
    },
    status: {
        fontSize: 12,
        marginLeft: 10,
        color: 'rgb(0,0,0,0.6)'
    },
    rightContainer:{
        marginLeft: "auto",
        '& > *': {
            padding: '8px',
            fontSize: 22,
            color: '#919191'
        }
    }
})

const ChatHeader = () => {
    const classes = useStyles();
    const { person } = useContext(userContext);
    const { activeUser } = useContext(AccountContext);
    console.log("active users in header", activeUser)
    return (
        <Box className={classes.header}>
            <img src={person.imageUrl} className={classes.dp} alt="dp"/>
            <Box>
                <Typography className={classes.name} >{person.name}</Typography>
                <Typography className={classes.status} >{activeUser?.find(user => user.userId === person.googleId)? 'Online': 'Offline'}</Typography>
            </Box>
            <Box className={classes.rightContainer}>
                <Search />
                <MoreVert />
            </Box>
        </Box>
    )
}

export default ChatHeader;