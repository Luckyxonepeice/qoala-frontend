import React, { useState,useEffect,useCallback} from "react";
import '../static/ImageInput.css'
import {uploadCard,cardInfo,deleteCard,updateCard} from '../API/api'
import Cardinfo from "./Cardinfo";
const  ImageInput = () => {

    const [file, setFile] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const [cards, setCards] = useState([{
        _id:"1234",
        idCardNumber: "",
        Name: "",
        Last_name: "",
        Date_of_birth: "",
        Date_of_issue: "",
        Date_of_Expiry: "",
        Status: "",
      },]);

    const handleUpdate =()=>{
        setShowUpdateForm(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getCards = async () => {
      const { result } = await cardInfo();
      setCards(result);
    };
    const Data_update = async (data)=>{
        
        await updateCard(data);
        setShowUpdateForm(false);
        setSelectedCardId(null);
        getCards();
    }

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
            document.getElementById('fileInput').value = '';

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
            
            {!showUpdateForm && 
            <>
                <h2>Add Image:</h2>
                <form onSubmit={handleSubmit}>
                <input id="fileInput" type="file" accept=".png, .jpg, .jpeg" onChange={handleChange} />
                <button type="submit" name="upload" onSubmit={handleSubmit}>
                Upload
                </button>
                </form>
            </>
            }
            {
                cards.map( (data)=><Cardinfo key={data._id} data={data} onDelete={handleDelete} onUpdate={handleUpdate}
                update_active={showUpdateForm} data_update={Data_update}
                selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId} />)
            }
        </div>
    );
}
 
export default ImageInput;