import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div>
            <Link to="/">
                <div className="navbar">
                    <FaCoins className="icon" />
                    <h1>Coin <span className="purple">Hunter</span></h1>
                </div>
            </Link>
        </div>
    )
}

export default Navbar;