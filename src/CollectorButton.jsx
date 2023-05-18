import React, { useContext } from "react";
import StyleContext from "./StyleContext";


export default function CollectorButton() {
  const buttonStyle  = useContext(StyleContext);
  return (
    <div>
      <button style = {buttonStyle}>
        Click Here!
      </button>
    </div>
  );
}
