import React from "react";

/**
 * Component for creating buttons
 * @param {string} buttonText string to be shown in the button 
 * @returns 
 */
function Button({buttonText}){

    return <button id="validate-button">{buttonText}</button>;
}

export default Button;