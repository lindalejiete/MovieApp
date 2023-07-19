import React from "react";
import "./ErrorMessage.css";
const ErrorMessage = ({message}: any) => {
  return (
    <p className="Error">
      <span>❌</span>
      {message}
    </p>
  );
};

export default ErrorMessage;
