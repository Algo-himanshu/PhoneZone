import React, { useState, useRef } from "react";
import Modal from "react-modal";

const ProfileModal = ({ showModal, onClose, onUpdate, onRemove }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // Reference for the hidden file input

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpdate = () => {
    if (file) {
      onUpdate(file);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onClose}
      className="profile-modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          &times;
        </button>
        <h2>Profile Picture Options</h2>
        <button onClick={handleButtonClick} className="file-button">
          Update Profile Picture
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }} // Hide the file input
        />
        <button onClick={handleRemove} className="remove-button">
          Remove Profile Picture
        </button>
      </div>
    </Modal>
  );
};

export default ProfileModal;
