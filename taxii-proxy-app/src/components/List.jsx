import React from "react";
import ListItem from "./ListItem";

const listOfItems = ["Item1", "Item2", "Item3", "Item4"]

function createList(bundle){
    return <ListItem key={bundle} name={bundle} itemNum="5" errorNum="10"/>
}

function List() {
    return (<div>
        <ul>
            {listOfItems.map(createList)}
        </ul>
    </div>)
}


export default List;