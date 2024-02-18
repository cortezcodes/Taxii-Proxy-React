import React from "react";
import CollapsibleList from "./CollapsibleList";

function JsonView(props){
    return <div className="jsonView"> 
        <h3 className="json-view-header"> {props.data.id} </h3>
        <CollapsibleList />
    </div>
}

export default JsonView;