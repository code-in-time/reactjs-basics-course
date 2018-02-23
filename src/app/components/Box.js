import React from "react";

// A stateless component
export const Box = props => {

  return (
    <div className="panel panel-default">
      <div className="panel-body">{props.name}</div>
    </div>
  );
};

