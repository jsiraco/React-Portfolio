import React from "react";

export const Project = () => {

    return (
        <div className="columns" id="Work">
            <div className="column is-1">
                {/* <!-- empty --> */}
            </div>
            <div className="column is-2">
                <div className="content">
                    <h2 className="caption">Work |</h2>
                </div>
            </div>
            <div className="column is-8">
                {/* <!-- Image Cards --> */}
                <div className="columns">
                    <div className="card is-fullwidth">
                        <header className="card-header">
                            <p className="card-header-title">
                                {/* <!-- Title is a link to the repository --> */}
                                <a href="https://github.com/jsiraco/Enlightenment" target="_blank" rel="noreferrer">
                                    Enlightenment
                                </a>
                            </p>
                        </header>
                        <div className="card-image">
                            <figure className="image">
                                {/* <!-- Image is a link to the live site --> */}
                                <a href="https://jsiraco.github.io/Enlightenment/" target="_blank" rel="noreferrer">
                                    <img src="./assets/images/Enlightenment-Screenshot.png"
                                        alt="Screenshot with multiple images in a panel formation with like buttons"></img>
                                </a>
                            </figure>
                        </div>
                        <footer className="card-footer">
                            {/* <!-- Skills & technologies used in application --> */}
                            <p className="subtitle is-small">
                                JQuery, Javascript, Bulma, APIs
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="columns">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                <a href="https://github.com/jsiraco/Code_Quiz_JS" target="_blank" rel="noreferrer">
                                    Code Quiz
                                </a>
                            </p>
                        </header>
                        <div className="card-image">
                            <figure className="image">
                                <a href="https://jsiraco.github.io/Code_Quiz_JS/" target="_blank" rel="noreferrer">
                                    <img src="./assets/images/Code_Quiz_Screenshot.png"
                                        alt="Screenshot of a timed code quiz with multiple choice answers"></img>
                                </a>
                            </figure>
                        </div>
                        <footer className="card-footer">
                            <p className="subtitle">
                                Javascript, HTML, CSS
                            </p>
                        </footer>
                    </div>
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                <a href="https://github.com/OneFJef/Persist" target="_blank" rel="noreferrer">
                                    Persist
                                </a>
                            </p>
                        </header>
                        <div className="card-image">
                            <figure className="image">
                                <a href="https://ancient-ravine-93786.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img src="./assets/images/Persist_screenshot.png"
                                        alt="Screenshot of a time-budgeting app with saved tasks and a resposive daily planner">
                                    </img>
                                </a>
                            </figure>
                        </div>
                        <footer className="card-footer">
                            <p className="subtitle">
                                Sequelize, Node.js, Handlebars.js, Heroku
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="columns">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                <a href="https://github.com/jsiraco/PortfolioJSV1" target="_blank" rel="noreferrer">
                                    Portfolio V1
                                </a>
                            </p>
                        </header>
                        <div className="card-image">
                            <figure className="image">
                                <a href="https://jsiraco.github.io/PortfolioJSV1/" target="_blank" rel="noreferrer">
                                    <img src="./assets/images/profile_v1_screenshot.png"
                                        alt="Screenshot of a demo Portfolio"></img>
                                </a>
                            </figure>
                        </div>
                        <footer className="card-footer">
                            <p className="subtitle">
                                HTML, CSS, Flexbox
                            </p>
                        </footer>
                    </div>
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                <a href="https://github.com/jsiraco/team_profile_generator" target="_blank" rel="noreferrer">
                                    Inquirer HTML Generator
                                </a>
                            </p>
                        </header>
                        <div className="card-image">
                            <figure className="image">
                                <a href="https://jsiraco.github.io/inquirer_html_gen/" target="_blank" rel="noreferrer">
                                    <img src="./assets/images/inquire_demo_screenshot.png"
                                        alt="Screenshot of an html page generated with inquire and node.js"></img>
                                </a>
                            </figure>
                        </div>
                        <footer className="card-footer">
                            <p className="subtitle">
                                Node.js, Javascript, Inquirer, fs
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};