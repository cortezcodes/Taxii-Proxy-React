import React, {useState} from "react";
import JsonFormatter from 'react-json-formatter';

function CollapsibleListItem(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const jsonStyle = {
        propertyStyle: { color: 'red' },
        stringStyle: { color: 'green' },
        numberStyle: { color: 'darkorange' }
    }

    return (
    <div className="list-item-no-bullet">
    <button className="collapse-button" onClick={toggleOpen}>{props.stixObject.id}</button>
    {isOpen && (
        <div className="collapsible-container">
            <JsonFormatter json={props.stixObject} tabWith={4} jsonStyle={jsonStyle}/>
        </div>
    )}
        
    </div>);
}

export default CollapsibleListItem;