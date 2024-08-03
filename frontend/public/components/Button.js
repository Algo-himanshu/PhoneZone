import React from "react";
// import { handleClick, title } from "pageProps";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      type="button"
      className="btn btn-primary col-md-1 offset-md-1"
    >
      {props.title}
    </button>
  );
};

export default Button;
