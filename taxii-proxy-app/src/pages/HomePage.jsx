import React, {useState, useEffect} from "react";
import Table from "../components/Table";
import FileUploadForm from "../components/FileUploadForm";

/** 
 * Main page going to the index
 * @returns {JSX.Element} of all components to the homepage
 */
function HomePage(){
    const [stixData, setStixData] = useState();

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

    return(<div>
        <FileUploadForm />
        <Table data={[stixData]}/>
    </div>
    )
}

export default HomePage