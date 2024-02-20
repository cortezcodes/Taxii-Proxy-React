import React from "react";
import CollapsibleListItem from "./CollapsibleListItem";


function listObjects(stix, index){
    return <CollapsibleListItem key={index} stixObject={stix}/>
}


/**
 * CollapsibleList component used to visualize JSON on the 
 * VisualizerPage
 * @param {*} props STIX object data 
 * @returns {JSX.Element} Collapsible List
 */
function CollapsibleList(props){
    return (<ul className="collapsible-list">
       {props.stixObjects.objects.map(listObjects)} 
    </ul>);
}

export default CollapsibleList;