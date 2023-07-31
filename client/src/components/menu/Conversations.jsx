import React,{ useContext, useEffect, useState } from "react";
import { getUsers } from "../../service/api";
import { Box, makeStyles } from "@material-ui/core";
import Conversationcard from "./Conversationcard";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    component:{
        height: '81vh',
        overflow: 'overlay'
    }
})

const Conversations = ({ text }) => {
    const classes = useStyles();
    const { account, socket, setActiveUsers } = useContext(AccountContext);
    const [users,setUsers] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await getUsers();
            console.log(response, 'response');
            const filteredData = response.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData)
        }
        fetchData();
    },[text])

    useEffect(() => {
        console.log('account in socket', account);
        socket.current.emit('addUser', account.googleId);
        socket.current.on('getUsers', users => {
            console.log("getUsers",users)
            setActiveUsers(users);
        })
    },[account])

    return (
        <Box className={classes.component}>
            {users.map(user => (
                user.googleId !== account.googleId &&
                <Conversationcard users={user} />
            ))}
        </Box>
    )

}

export default Conversations;