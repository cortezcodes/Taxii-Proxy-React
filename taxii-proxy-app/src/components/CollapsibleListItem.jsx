import React from "react";
import JsonFormatter from 'react-json-formatter';

function CollapsibleListItem(props){

    const jsonStyle = {
        propertyStyle: { color: 'red' },
        stringStyle: { color: 'green' },
        numberStyle: { color: 'darkorange' }
    }

    return (<li className="list-item-no-bullet">
        <JsonFormatter json={props.stixObject} tabWith={4} jsonStyle={jsonStyle}/>
    </li>);
}

export default CollapsibleListItem;