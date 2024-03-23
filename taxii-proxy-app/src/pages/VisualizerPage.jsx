import React, {useState, useEffect} from "react";
import JsonView from "../components/JsonView";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import NetworkDiagram from "../components/NetworkDiagram";
import DropDown from "../components/DropDown";

/**
 * Shows the Visualizer page which consist of two components. 
 * The first is the JSON visualizer on the left third of the page.
 * The second is the visualized graph of the STIX representation. 
 *        
 * @returns {JSX.Element} for the visualizer page
 */
function VisualizerPage(){
    const [schemaData, setSchemaData] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try { 
            const response = await fetch("http://localhost:5000/get/schema/list");
            const schemas = await response.json();
            setSchemaData(schemas);
        }
        catch(error){
            console.error("Could not fetch data: ", error);
        }

    };
    
    const location = useLocation();

    return <div className="visualizer">
        <JsonView data={location.state.data}/>
        <NetworkDiagram stixBundle={location.state.data} />
        <div id="validate-section">
            <Button buttonText="Validate"/>
            <DropDown options={schemaData}/>
        </div> 
    </div>
}

export default VisualizerPage