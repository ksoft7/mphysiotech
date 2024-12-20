import React, { useState } from "react";

const ImageUpload = ({ setPostImages }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) {
      alert("You can upload up to two images only.");
      return;
    }

    const base64Images = await Promise.all(
      files.map((file) => convertToBase64(file))
    );

    setImagePreviews(base64Images);
    setPostImages(base64Images);
  };

  return (
    <form>
      <input
        type="file"
        label="Images"
        accept=".jpeg, .png, .jpg, .webp"
        multiple
        onChange={handleFileUpload}
      />
      {/* <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {imagePreviews.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Preview ${index + 1}`}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        ))}
      </div> */}
    </form>
  );
};

export default ImageUpload;
