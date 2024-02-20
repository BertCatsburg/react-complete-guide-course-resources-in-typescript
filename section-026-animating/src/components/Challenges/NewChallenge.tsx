import { useContext, useRef, useState } from 'react';
import React from 'react'
import { ChallengesContext } from '../../store/challenges-context'
import {Modal} from '../index'
import images from '../../assets/images.js';
import {ChallengeInterface} from '../../types'

export const NewChallenge = ({ onDone }: {onDone: any}) => {
  const title = useRef<any>();
  const description = useRef<any>();
  const deadline = useRef<any>();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  const handleSelectImage = (image: any) => {
    setSelectedImage(image);
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const challenge: ChallengeInterface = {
      title: title.current?.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
      id: '', // Will be overwritten in the Save
      status: 'active' // Will be overwritte in the Save
    };

    if (
      !challenge.title?.trim() ||
      !challenge.description?.trim() ||
      !challenge.deadline?.trim() ||
      !challenge.image
    ) {
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <ul id="new-challenge-images">
          {images.map((image: any) => (
            <li
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image}  alt="" />
            </li>
          ))}
        </ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
