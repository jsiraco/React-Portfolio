import React from "react";

export const ProjectCards = (props: any) => {

    return (
        <div className={`column is-${props.size} is-offset-${props.offest}`}>
            <div className="card is-fullwidth">
                <header className="card-header">
                    <p className="card-header-title">
                        {/* <!-- Title is a link to the repository --> */}
                        <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
                            {props.title}
                        </a>
                    </p>
                </header>
                <div className="card-image">
                    <figure className="image">
                        {/* <!-- Image is a link to the live site --> */}
                        <a href={props.liveSite} target="_blank" rel="noopener noreferrer">
                            <img src={props.img}
                                alt={props.alt}></img>
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
    );
};