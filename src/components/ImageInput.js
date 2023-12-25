import React, { useState } from "react";
import '../static/ImageInput.css'
import {uploadCard} from '../API/api'
function  ImageInput() {

    const [file, setFile] = useState(null);

    function handleSubmit(e){
        e.preventDefault();

        if(file){
            uploadCard(file);
        }else{
            alert("No file selected")
        }

    }
    function handleChange(e) {
        

        const selectFile = e.target.files[0];

        setFile(selectFile);
        
    }
 
    return (
        <div className="app-container">
            <h2>Add Image:</h2>
            <form onSubmit={handleSubmit}>
            <input type="file" accept=".png, .jpg, .jpeg" onChange={handleChange} />
            <button type="submit" name="upload" onSubmit={handleSubmit}>
                Upload
            </button>
            </form>
        </div>
    );
}
 
export default ImageInput;