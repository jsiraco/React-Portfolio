import React from "react";

export const Caption = (props:any) => {

    return (
        <div className="column is-offset-5" id={props.id}>
        <div className="content">
          <h2 className="caption">{props.section}</h2>
        </div>
      </div>
    );
};