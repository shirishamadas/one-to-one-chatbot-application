import React, {useContext,useEffect,useState} from "react";
import { Box } from "@material-ui/core";

import { userContext } from "../../context/UserProvider";

import ChatHeader from "./chatHeader";
import Messages from "./messages";
import { getConversation } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";


const Chat = () => {
    const { person } = useContext(userContext);
    const { account } = useContext(AccountContext);

    const [conversation,setConversation] = useState({})
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({sender:account.googleId,receiver: person.googleId})
            setConversation(data)
        }
        getConversationDetails();
    },[person.googleId])
    return(
        <Box>
            <ChatHeader />
            <Messages conversation={conversation} person={person} />
        </Box>
    )
}

export default Chat