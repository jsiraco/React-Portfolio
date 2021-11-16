import React from "react";

export const Footer = () => {

    return (
        <div className="columns" id="ContactMe">
            <div className="column is-1"></div>
            <div className="column is-2">
                {/* <!-- Contact Info --> */}
                <div className="content">
                    <h2 className="caption"> Contact | </h2>
                </div>
            </div>
            <div className="column is-8">
                <div className="content">
                    <h3 className="title">
                        <a href="mailto: developer.jsiraco@gmail.com" className="text-reset">Email |</a>
                        <a href="https://github.com/jsiraco" className="text-reset" target="_blank" rel="noreferrer">GitHub |</a>
                        <a href="https://www.linkedin.com/in/jsiraco/" className="text-reset" target="_blank" rel="noreferrer">LinkedIn</a>
                    </h3>
                </div>
            </div>
        </div>
    )
}