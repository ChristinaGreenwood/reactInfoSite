import React from "react";


function Header() {
    return (
        <header>
            <nav className="nav-wrapper">
                <img className="logo" src="download.png" />
                <ul className="nav-bar">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;