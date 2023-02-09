import React from "react";
import { MessageError } from "./styles/stylesError";

const Error = ({ mensaje }) => {
  return <MessageError>{mensaje}</MessageError>;
};

export default Error;
