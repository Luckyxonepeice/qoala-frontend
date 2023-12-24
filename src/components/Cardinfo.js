import React , {useState} from 'react';
import '../static/cardinfo.css';  

const Cardinfo = ({data}) => {
    const {
        idCardNumber,
        Name,
        Last_name,
        Date_of_birth,
        Date_of_issue,
        Date_of_Expiry,
        Status
    } = data;
    

  return (
    <div className="card-container">
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
        <button >Update</button>
        <button >Delete</button>
      </div>
    </div>
  );
};

export default Cardinfo;
