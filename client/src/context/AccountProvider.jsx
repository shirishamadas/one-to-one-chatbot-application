import { createContext, useState, useRef, useEffect} from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null); 

const AccountProvider = ( { children }) => {

    const [account, setAccount] = useState();
    const [activeUser, setActiveUsers] = useState([]);
    const [newMessageFlag, setnewMessageFlag] = useState(false)

    const socket = useRef();


    // useEffect(() => {

    // })

    useEffect(()=>{
        socket.current = io('ws://localhost:9000');
    },[])

    useEffect(() => {
        console.log("activeUser",activeUser);
    },[activeUser])

    console.log(account)

    return (
        <AccountContext.Provider value={{
            account, setAccount, socket, activeUser, setActiveUsers, newMessageFlag, setnewMessageFlag
        }}
        >
        {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;