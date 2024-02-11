import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import FileUploadForm from "./FileUploadForm";

function App(){
    return <div>
        <Header />
        <FileUploadForm />
        <List />
        <Footer />
    </div>
}

export default App;