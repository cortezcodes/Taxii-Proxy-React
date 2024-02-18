import React from "react";
import {useNavigate} from 'react-router-dom'

function TableRow(props) {

    const navigate = useNavigate();

    const rowClickHandler = (rowData) => {
        console.log("Row clicker: ", rowData);
        navigate("/visualizer");

    }


    return (<tr onClick={() => rowClickHandler(props)}>
        <td>{props.name}</td>
        <td>{props.version}</td>
        <td>{props.itemNum}</td>
        <td>{props.errorNum}</td>
    </tr>); 
}

export default TableRow;