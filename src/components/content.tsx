import React from "react";

export const Content = () => {

    return (
        <div className="columns" id="AboutMe">
        <div className="column is-1">
            {/* <!-- empty --> */}
        </div>
        <div className="column is-2">
            <div className="content">
                <h2 className="caption">About Me |</h2>
            </div>
        </div>
        {/* <!-- Bio --> */}
        <div className="column is-8">
            <div className="content is-medium">
                <p>
                    I'm Josef and I'm an apsiring web-developer. I currently work as a tourism counselor and senior
                    delivery lead.
                    My main hobbies are cooking, hiking, eating, and
                    going
                    to museum. I'm a lifelong student and enjoy learning of any kind. Here you will find a
                    listing
                    of some of my professional projects that I will update as time goes on and my contact info.
                </p>
            </div>
        </div>
    </div>
    );
};