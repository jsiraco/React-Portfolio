import React from "react";

export const Navbar = () => {

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            {/* <!-- Navbar burger element for mobile --> */}
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start"></div>
        </div>
        {/* <!-- Items in navbar --> */}
        <div className="navbar-end navbar-menu">
            <a className="navbar-item" href="#AboutMe">About Me</a>
            <a className="navbar-item" href="#Work">Work</a>
            <a className="navbar-item" href="#ContactMe">Contact Me</a>
            <div className="navbar-item">
                <div className="buttons">
                    {/* <!-- Resume --> */}
                    <a className="button is-success" href="./assets/Resume-Josef-Siraco.pdf"
                        download="Jsiraco_Resume" target="_blank" rel="noreferrer">
                        <strong>Resume</strong>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    )
}