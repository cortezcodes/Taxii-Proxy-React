import React from "react";
import CollapsibleListItem from "./CollapsibleListItem";

/**
 * CollapsibleList component used to visualize JSON on the 
 * VisualizerPage
 * @param {*} props STIX object data 
 * @returns {JSX.Element} Collapsible List
 */
function CollapsibleList(props){
    return (<ul className="collapsible-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>);
}

export default CollapsibleList;