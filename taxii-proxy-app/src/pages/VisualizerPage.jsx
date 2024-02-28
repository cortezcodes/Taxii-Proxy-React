import React from "react";
import JsonView from "../components/JsonView";
import Node from "../components/Node";
import { useLocation } from "react-router-dom";
import NetworkDiagram from "../components/NetworkDiagram";

/**
 * Shows the Visualizer page which consist of two components. 
 * The first is the JSON visualizer on the left third of the page.
 * The second is the visualized graph of the STIX representation. 
 *        
 * @returns {JSX.Element} for the visualizer page
 */
function VisualizerPage(){
    
    const location = useLocation();

    return <div className="visualizer">
        <JsonView data={location.state.data}/>
        <NetworkDiagram />
    </div>
}

export default VisualizerPage