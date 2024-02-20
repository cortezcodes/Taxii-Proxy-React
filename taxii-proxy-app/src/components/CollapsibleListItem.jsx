import React from "react";

function CollapsibleListItem(props){
    console.log(props.stixObject);
    return (<li className="list-item-no-bullet">
        <pre>{JSON.stringify(props.stixObject, null, 2)}</pre>
    </li>);
}

export default CollapsibleListItem;