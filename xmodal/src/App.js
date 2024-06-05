import './App.css';
import React, {useState} from 'react';
import Modal from './Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal} style={{backgroundColor:"#009BFF",border:"none", transition:"transform 0.3s ease", padding:"10px 25px", color:"#FFFFFF", fontSize:"16px", cursor:"pointer"}} onMouseOver={(e)=>e.target.style.transform="scale(1.1)"} onMouseLeave={(e)=>e.target.style.transform="scale(1.0)"}>Open Form</button>
      {isModalOpen && <Modal handleCloseModal={handleCloseModal}/>}
    </div>
  );
}

export default App;