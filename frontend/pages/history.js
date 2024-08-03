import React from "react";
import { useContext } from "react";
import { userContext } from "../context/index";
const history = () => {
  const [user] = useContext(userContext);
  console.log(user.token);
  return <div>history</div>;
};

export default history;
