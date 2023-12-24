import React, {useRef, useState, Fragment, useCallback} from 'react';

import {Places, Modal, DeleteConfirmation, AvailablePlaces} from './index';
import logoImg from '../assets/logo.png';
import {PlacesDataInterface} from "../types/types";

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false) // Used in Modal with useEffect
  const selectedPlace = useRef<string>();
  const [userPlaces, setUserPlaces] = useState<PlacesDataInterface[]>([]);

  const handleStartRemovePlace = (place: PlacesDataInterface) => {
    setModalIsOpen(true)
    selectedPlace.current = place.id;
  }

  const handleStopRemovePlace = () => {
    setModalIsOpen(false)
  }

  function handleSelectPlace(selectedPlace: PlacesDataInterface) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    // Also send the updated array back to the backend
  }

  const handleRemovePlace = useCallback(async () => {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false)
  }, [])

  return (
    <Fragment>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>  {/* ref={modal} */}
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe"/>
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </Fragment>
  );
}

