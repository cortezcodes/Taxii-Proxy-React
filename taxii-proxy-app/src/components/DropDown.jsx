import React from "react";


/**
 * 
 * @param {*} options List of options to add to the dropdown 
 * @returns 
 */
function DropDown({options}){

    const optionList = options.map((option, index) => <option key={index} value={option}>{option}</option>);

    return (<select id="schema-selector">
        {optionList}
    </select>);
}

export default DropDown;