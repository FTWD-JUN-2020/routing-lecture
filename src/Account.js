import React from "react";

const Account = (props) => {
  console.log(props);
  return <div>Hello {props.match.params.userName}</div>;
};

export default Account;
