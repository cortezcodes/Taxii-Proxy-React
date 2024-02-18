import react, {useState, useEffect} from "react";
import Table from "./Table";
import FileUploadForm from "./FileUploadForm";

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