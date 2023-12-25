// src/components/Form.js

import React, { useState } from 'react';
import '../static/form.css';  // Importing CSS file

const Form = ({data,update}) => {
  const [formData, setFormData] = useState({
    ...data,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(formData);
  };

  return (
    <div className="card-form-container">
      <h2>Card Form</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <div className="form-group">
          <label>ID Card Number:</label>
          <input
            type="text"
            name="idCardNumber"
            value={formData.idCardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="Last_name"
            value={formData.Last_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth (DD-MM-YYYY):</label>
          <input
            type="text"
            name="Date_of_birth"
            value={formData.Date_of_birth}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />
        </div>
        <div className="form-group">
          <label>Date of Issue (DD-MM-YYYY):</label>
          <input
            type="text"
            name="Date_of_issue"
            value={formData.Date_of_issue}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />
        </div>
        <div className="form-group">
          <label>Date of Expiry (DD-MM-YYYY):</label>
          <input
            type="text"
            name="Date_of_Expiry"
            value={formData.Date_of_Expiry}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />

        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            name="Status"
            value={formData.Status}
            onChange={handleChange}
          />
          </div>

          <button type='submit' onSubmit={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Form;
