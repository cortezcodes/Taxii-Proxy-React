import React from "react";

function ListItem(props) {
    return <li className="bundle-list-item">
        <div>
            <p>{props.name}</p>
            <p>{props.itemNum}</p>
            <p>{props.errorNum}</p>
        </div>
    </li>
}

export default ListItem;