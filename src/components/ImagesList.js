import React from "react";
import ImageItem from "./ImageItem";

const ImagesList = ({ images, handleDeleteImage }) => {
  const renderedImages = images.map((image) => {
    return (
      <ImageItem
        key={image.id}
        image={image}
        handleDeleteImage={handleDeleteImage}
      />
    );
  });

  return <div className="columns is-multiline">{renderedImages}</div>;
};
export default ImagesList;
