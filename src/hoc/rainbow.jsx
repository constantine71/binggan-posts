import React from "react";

const Rainbow = WrappedComponent => {
  const colors = ["red", "orange", "yellow", "green", "blue", "pink", "indigo"];
  // const randomColor = colors[Math.round(Math.random() * 6)];
  const divStyle = {
    color: colors[Math.round(Math.random() * 6)],
    background: colors[Math.round(Math.random() * 6)]
  };
  return props => {
    return (
      <div style={divStyle}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
