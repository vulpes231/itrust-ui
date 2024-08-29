import React, { useRef, useState } from "react";

const Fileupload = ({ onFileUpload }) => {
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState(null); // State for preview
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file)); // Create a preview URL
      onFileUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setPreview(URL.createObjectURL(file)); // Create a preview URL
      onFileUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the file input
      />
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`w-full h-64 border-dashed border-4 rounded-md flex items-center justify-center cursor-pointer ${
          dragging ? "border-blue-500" : "border-gray-300"
        }`}
      >
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full" />
        ) : (
          <p className="text-center text-gray-600">
            {dragging
              ? "Release to drop"
              : "Drag & drop your file here or click to select"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Fileupload;
