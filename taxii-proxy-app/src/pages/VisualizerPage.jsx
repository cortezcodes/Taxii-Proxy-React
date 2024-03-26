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
    const location = useLocation();
    const [stixBundle, setStixBundle] = useState(location.state.data);
    const [validationResponse, setValidationResponse] = useState('no Validation');

    useEffect(() => {
        fetchSchemas();
    },[]);

    const fetchSchemas = async () => {
        try { 
            const response = await fetch("http://localhost:5000/get/schema/list");
            const schemas = await response.json();
            setSchemaData(schemas);
        }
        catch(error){
            console.error("Could not fetch data: ", error);
        }
    };

    const fetchValidation = async() => {
        try{
            fetch("http://localhost:5000/validate", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'stixBundle':stixBundle,
                    'schema': 'test'
                })
            })
            .then(response => response.json())
            .then(data => {
                setValidationResponse(data);
                console.log(validationResponse.message);
            });

        }
        catch(error){
            console.error("Could not fetch data: ", error);
        }
    }

    return <div className="visualizer">
        <JsonView data={stixBundle}/>
        <NetworkDiagram stixBundle={stixBundle} />
        <div id="validate-section">
            <Button onClick={fetchValidation} buttonText="Validate"/>
            <DropDown options={schemaData}/>
        </div> 
    </div>
}

export default VisualizerPage