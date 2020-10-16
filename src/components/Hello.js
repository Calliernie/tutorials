import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    null,
    React.createElement("h1", null, "Hello Ernest")
  );
};

export default Hello;
