import React, {useState, ReactNode, FormEvent} from 'react'

import {ImagePicker} from '../UI'
import {ImageInterface} from "../types";

interface InputDataInterface {
  image: ImageInterface
  title: string
  description: string
  time: string
  location: string
  date: string
}

interface EventFormInterface {
  inputData?: InputDataInterface | null
  onSubmit: ({image, ...data}: { image: ImageInterface; }) => void
  children?: ReactNode

}

export const EventForm = ({inputData, onSubmit, children}: EventFormInterface) => {
  const [selectedImage, setSelectedImage] = useState(inputData?.image.path);

  const handleSelectImage = (imagePath: string) => {
    setSelectedImage(imagePath);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData)
    const data = Object.fromEntries(formData);

    const newImage = {
      path: 'sdf',
      caption: 'slfsdlkfjsd'
    }
    onSubmit({...data, image: newImage}); //
  }

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      <p className="control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={inputData?.title ?? ''}
        />
      </p>

      <div className="control">
        <ImagePicker
          images={[]}
          onSelect={handleSelectImage}
          selectedImage={selectedImage}
        />
      </div>

      <p className="control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={inputData?.description ?? ''}
        />
      </p>

      <div className="controls-row">
        <p className="control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={inputData?.date ?? ''}
          />
        </p>

        <p className="control">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={inputData?.time ?? ''}
          />
        </p>
      </div>

      <p className="control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={inputData?.location ?? ''}
        />
      </p>

      <p className="form-actions">{children}</p>
    </form>
  );
}
