import React, { useState,useEffect,useCallback} from "react";
import '../static/ImageInput.css'
import {uploadCard,cardInfo,deleteCard} from '../API/api'
import Cardinfo from "./Cardinfo";
function  ImageInput() {

    const [file, setFile] = useState(null);

    const [cards, setCards] = useState([
      {
        idCardNumber: "",
        Name: "",
        Last_name: "",
        Date_of_birth: "",
        Date_of_issue: "",
        Date_of_Expiry: "",
        Status: "",
      },
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getCards = async () => {
      const { result } = await cardInfo();
      setCards(result);
    };
    useEffect(() => {
      getCards();
    }, []);

    const handleSubmit = useCallback(
      async (e) => {
        e.preventDefault();

        if (file) {
          try {
            await uploadCard(file);
            getCards();

            setFile(null);
          } catch (error) {
            console.error("Error uploading card:", error);
          }
        } else {
          alert("No file selected");
        }
      },
      [file]
    );

    const handleDelete = async (cardId) => {
      try {

        await deleteCard(cardId)
        await getCards();
        
      } catch (error) {
        console.error("Error deleting card:", error);
      }
    };

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
            {
                cards.map( (data)=><Cardinfo key={data._id} data={data} onDelete={handleDelete}/>)
            }
        </div>
    );
}
 
export default ImageInput;