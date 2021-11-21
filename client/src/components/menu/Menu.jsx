import React from "react";
import Header from "./Header";
import Conversations from "./Conversations";
import Search from "./Search";

const Menu = () =>{
    return (
        <>
            <Header />
            <Search />
            <Conversations />
        </>
    )
}

export default Menu