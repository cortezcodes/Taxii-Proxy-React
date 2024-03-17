import React from "react";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();

    const logoClickHandler = () => {
        navigate("/");
    };

    return <header>
        <h1 onClick={() => logoClickHandler()}>Taxii Proxy</h1>
    </header>
}

export default Header;