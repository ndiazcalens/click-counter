import React from "react";
import "../stylesheets/button.css";

function Button ({text, isClickButton, isRestButton, handleClick}) {
  return(
    <button
      className={isClickButton ? "click-button" : isRestButton ? "rest-button" : "restart-button" }
      onClick={handleClick} > {/* <= event listener*/}
      {text}
    </button>
  );    
}

export default Button;