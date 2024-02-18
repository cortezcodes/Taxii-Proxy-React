import React from "react";

function TableRow(props) {
    const rowClickHandler = (rowData) => {
        console.log("Row clicker: ", rowData);
    }


    return (<tr onClick={() => rowClickHandler(props)}>
        <td>{props.name}</td>
        <td>{props.version}</td>
        <td>{props.itemNum}</td>
        <td>{props.errorNum}</td>
    </tr>); 
}

export default TableRow;