import React from "react";


/**
 * 
 * @param {*} options List of options to add to the dropdown 
 * @returns 
 */
function DropDown({onValueChange, options}){
    // Populates the dropdown menu
    const optionList = options.map((option, index) => <option key={index} value={option}>{option}</option>);
    
    // handles changes in the dropdown menu
    const changeHandler = (e) => {
        onValueChange(e.target.value);
    }

    return (<select onChange={changeHandler} id="schema-selector" defaultValue='STIX 2.1'>
        {optionList}
    </select>);
}

export default DropDown;