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
    const [selectedSchema, setSelectedSchema] = useState('STIX 2.1')

    // Have this run only once to populate the schema dropdown
    useEffect(() => {
        fetchSchemas();
    },[]);

    // This is used to populate the schema dropdown list
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

    // Makes the API call to validate the current selected bundle.
    const fetchValidation = async() => {
        try{
            fetch("http://localhost:5000/validate", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'stixBundle':stixBundle,
                    'schema': selectedSchema
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

    // gets the value of the dropdown menu
    const getDropDownValue = (value) => {
        setSelectedSchema(value);
    }


    return <div className="visualizer">
        <JsonView data={stixBundle}/>
        <NetworkDiagram stixBundle={stixBundle} />
        <div id="validate-section">
            <Button onClick={fetchValidation} buttonText="Validate"/>
            <DropDown onValueChange={getDropDownValue} options={schemaData}/>
        </div> 
    </div>
}

export default VisualizerPage