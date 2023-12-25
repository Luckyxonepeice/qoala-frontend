import React, { useState,useEffect,useCallback} from "react";
import '../static/ImageInput.css'
import {uploadCard,cardInfo,deleteCard,updateCard} from '../API/api'
import Cardinfo from "./Cardinfo";
import CheckBox from "./CheckBox";
const  ImageInput = () => {

    const [file, setFile] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const [cards, setCards] = useState([]);

    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const getCards = async () => {
        // Prepare filter parameters based on selected checkboxes
        //console.log(selectedFilter);
        const { result } = await cardInfo(selectedFilter);
        //console.log(result);
        setSelectedCardId(null);
        setCards(result);
    };

    const handleUpdate =()=>{
        setShowUpdateForm(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const Data_update = async (data)=>{
        
        await updateCard(data);
        setShowUpdateForm(false);
        setSelectedCardId(null);
        getCards();
    }

    useEffect(() => {
      getCards();
    }, [selectedFilter]);

    
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
            <CheckBox handleChange={handleFilterChange} selectedFilter={selectedFilter}/>
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