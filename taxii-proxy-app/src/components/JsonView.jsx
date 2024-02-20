import React from "react";
import CollapsibleList from "./CollapsibleList";

/**
 * STIX json Visualizer section within the Visualizer page.
 * @param {*} props Data from the STIX object
 * @returns {JSX.Element} of the JSON section of the visualizer
 */
function JsonView(props){
    return (<div className="jsonView"> 
        <h3 className="json-view-header"> {props.data.id} </h3>
        <CollapsibleList stixObjects={props.data} />
    </div>)
}

export default JsonView;