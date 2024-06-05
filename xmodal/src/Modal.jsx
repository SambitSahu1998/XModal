import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ handleCloseModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: '',
  });

   const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


 const validate = () => {
	if (!formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return false;
    }
	if (new Date(formData.dob) > new Date()) {
      alert('Invalid Date of Birth. Please enter a past date.');
      return false;
    }
	if (!/^\d{10}$/.test(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleCloseModal();
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      handleCloseModal();
    }
  };
  
  
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
			  required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
			  required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
			  required
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
			  required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
