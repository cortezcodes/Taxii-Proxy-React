import React from "react";
import ListItem from "./ListItem";

function createList(bundle){
    if (Object.keys(bundle).length === 0){
        return;
    }
    return <ListItem key={bundle.id} name={bundle.id} itemNum={bundle.objects.length} errorNum="0"/>;
}

function List(props) {
    return (<div>
        <ul>
            {props.data.map(createList)}
        </ul>
    </div>);
}


export default List;