import React from 'react';
import '../static/cardinfo.css';  
import UpdateForm from './UpdateForm'
const Cardinfo = ({data,onDelete,onUpdate,data_update,selectedCardId, setSelectedCardId}) => {
  
    const {
        _id,
        idCardNumber,
        Name,
        Last_name,
        Date_of_birth,
        Date_of_issue,
        Date_of_Expiry,
        Status
    } = data;
    
    
    const handleDelete=()=>{
        onDelete(_id);
    }

    const handleUpdate=()=>{
      onUpdate(true);
      setSelectedCardId(_id);
    }

    const updatedData = (data) =>{
      data_update(data);

    }
  

    if(!selectedCardId){
      return(<div className="card-container">
      <h3>ID Card Details</h3>
      <div className="card-content">
        <p><strong>ID Card Number:</strong> {idCardNumber}</p>
        <p><strong>Name:</strong> {Name}</p>
        <p><strong>Last Name:</strong> {Last_name}</p>
        <p><strong>Date of Birth:</strong> {Date_of_birth}</p>
        <p><strong>Date of Issue:</strong> {Date_of_issue}</p>
        <p><strong>Date of Expiry:</strong> {Date_of_Expiry}</p>
        <p><strong>Status:</strong> {Status}</p>
      </div>
      <div className="card-actions">
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      </div>)
    }
    if(selectedCardId===_id) {
      return <UpdateForm key={data._id} data={data} update={updatedData}/>
    }
    
};

export default Cardinfo;
