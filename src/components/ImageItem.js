import React from "react";
import "./ImageItem.css";

const ImageItem = ({ image }) => {
  return (
    <div className="column is-3">
      <div className="image-item">
        <img
          className="image"
          loading="lazy"
          src={image.images.fixed_height_downsampled.url}
          alt={image.title}
        />
      </div>
    </div>
  );
};
export default ImageItem;
