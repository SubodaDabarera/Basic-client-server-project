import React from "react";
import {Link} from "react-router-dom";

const WelcomePage = () => {

    return(
        <div>
            <center>
                <Link to = "/customer">
                    <button style={{padding:"10px", margin:"10px"}}>Customer</button>
                </Link>
                <Link to = "/trader">
                    <button style={{padding:"10px", margin:"10px"}}>Trader</button>
                </Link>
            </center>
        </div>
    )
}