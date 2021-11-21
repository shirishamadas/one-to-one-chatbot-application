import React, { useContext } from "react";
import { Chat} from "@material-ui/icons"; 
import { Box } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";

const Header = () => {
    const { account } = useContext(AccountContext);
    return (
        <Box>
            <img src={account.imageUrl} />
            <Box>
                <Chat />
            </Box>
        </Box>
    );
}

export default Header;