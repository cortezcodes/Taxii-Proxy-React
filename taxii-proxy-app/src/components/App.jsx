import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import VisualizerPage from "../pages/VisualizerPage";

/*
 * This is the main app function for the entire TAXII-Proxy program.
 * It is where top-level component, names ending in "Page", are added to the UI.
 * @returns {JSX.Element} A set of react elements based on the value of page. 
*/
function App(){
    return (<div>
        <Router>
            <Header/>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />}/>
                    <Route path="visualizer" element={<VisualizerPage/> }/>
                </Route>
            </Routes>
            <Footer/>
    </Router>
    </div>
    );
}

export default App;