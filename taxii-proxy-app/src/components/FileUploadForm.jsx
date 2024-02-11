import React from "react";

const upload = (e) => {
    e.preventDefault();
}

function FileUploadForm() {
    return (<div>
        <form className="upload-form">
            <input type="file" id="file"/>
            <label for="file">Select STIX 2.X file</label>
            <button type="submit">Upload</button>
        </form>
    </div>);
}

export default FileUploadForm;
export {upload};