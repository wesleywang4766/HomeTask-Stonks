import React, { useState } from "react";
import Modal from "./Modal";
import ImageResizer from "./ImageResizer";

const ProfilePictureUpload: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {isModalOpen && selectedFile && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <ImageResizer file={selectedFile} />
        </Modal>
      )}
    </div>
  );
};

export default ProfilePictureUpload;
