import React from "react";

function TableRow(props) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.version}</td>
        <td>{props.itemNum}</td>
        <td>{props.errorNum}</td>
    </tr> 
}

export default TableRow;