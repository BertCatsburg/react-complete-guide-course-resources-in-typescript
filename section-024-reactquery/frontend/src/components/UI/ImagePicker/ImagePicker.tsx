import React from 'react'

import {ImageInterface} from "../../types";

interface ImagePickerInterface {
  images: ImageInterface[]
  selectedImage?: string | undefined
  onSelect: (path: string) => void
}

export const ImagePicker = ({images, selectedImage, onSelect}: ImagePickerInterface) => {
  if (!selectedImage) {
    return null
  }

  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {images.map((image) => (
          <li
            key={image.path}
            onClick={() => onSelect(image.path)}
            className={selectedImage === image.path ? 'selected' : undefined}
          >
            <img
              src={`http://localhost:3000/${image.path}`}
              alt={image.caption}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
