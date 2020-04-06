import React from "react";
import "./ImageItem.css";
import DeleteButton from "./DeleteButton";

const ImageItem = ({ image, handleDeleteImage }) => {
  return (
    <div className="column is-3">
      <div className="image-item">
        <img
          className="image"
          loading="lazy"
          src={image.images.fixed_height_downsampled.url}
          alt={image.title}
        />
        <div className="actions">
          <DeleteButton id={image.id} handleDeleteImage={handleDeleteImage} />
        </div>
      </div>
    </div>
  );
};
export default ImageItem;
