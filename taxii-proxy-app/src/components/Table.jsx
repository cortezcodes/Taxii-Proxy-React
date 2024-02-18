import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader"

function addTableRow(bundle){
    return <TableRow key={bundle.id}  name={bundle.id} version={bundle.objects[0].spec_version} itemNum={bundle.objects.length} errorNum="0"/>;
}

function Table(props) {
    return (<div style={{"overflowX": "auto"}}>
        <table className="no-border-breaks">
            <TableHeader headers={["Bundle ID", "Version", "# Objects", "Errors Found"]}/>
            <tbody>
                {console.log(props.data[0])}
                {props.data[0] === undefined ? null : props.data[0].map(addTableRow)}
            </tbody>
        </table>
    </div>);
}


export default Table;