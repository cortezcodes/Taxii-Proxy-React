import react from "react";

function TableHeader(props){
    return (<thead>
        <tr>
            {props.headers.map((head, headID) => (
                <th key={headID}>{head}</th>
            ))}
        </tr>
    </thead>)
}

export default TableHeader;