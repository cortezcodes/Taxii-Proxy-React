import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import FileUploadForm from "./FileUploadForm";

function App(){

    const [stixData, setStixData] = useState({});

    // Fetch backend index api call
    useEffect(() => {
        fetch("http://localhost:5000")
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setStixData(data);
            })
    },[]);

    return (<div>
        <Header />
        <FileUploadForm />
        <List data={[stixData]}/>
        <Footer />
    </div>);
}

export default App;