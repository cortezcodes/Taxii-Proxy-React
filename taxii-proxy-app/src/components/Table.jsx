import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader"

function addTableRow(bundle){
    if (Object.keys(bundle).length === 0){
        return;
    }
    return <TableRow key={bundle.id}  name={bundle.id} version={bundle.objects[0].spec_version} itemNum={bundle.objects.length} errorNum="0"/>;
}

function Table(props) {
    return (<div>
        <table className="no-border-breaks">
            <TableHeader headers={["Bundle ID", "Version", "# Objects", "Errors Found"]}/>
            <tbody>
                {props.data.map(addTableRow)}
            </tbody>
        </table>
    </div>);
}


export default Table;

        {/* <ul>
            <ListHeaders data={["Bundle ID", "Version", "# Objects", "Errors Found", "Data Loss"]} />
            {props.data.map(createTable)}
        </ul> */}