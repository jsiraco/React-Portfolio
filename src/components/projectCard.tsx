import React from "react";


export const ProjectCards = (props: any) => {

    return (
        <div className="columns">
            <div className="card is-fullwidth">
                <header className="card-header">
                    <p className="card-header-title">
                        {/* <!-- Title is a link to the repository --> */}
                        <a href="https://github.com/jsiraco/Enlightenment" target="_blank" rel="noreferrer">
                            {props.title}
                        </a>
                    </p>
                </header>
                <div className="card-image">
                    <figure className="image">
                        {/* <!-- Image is a link to the live site --> */}
                        <a href="https://jsiraco.github.io/Enlightenment/" target="_blank" rel="noreferrer">
                            <img src={`${`${props.img}`}`}
                                alt={`${props.alt}`}></img>
                        </a>
                    </figure>
                </div>
                <footer className="card-footer">
                    {/* <!-- Skills & technologies used in application --> */}
                    <p className="subtitle is-small">
                        {props.tech}
                    </p>
                </footer>
            </div>
        </div>
    )
}