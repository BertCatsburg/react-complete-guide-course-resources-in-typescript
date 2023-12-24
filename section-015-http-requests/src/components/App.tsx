import React, {useRef, useState, Fragment, useCallback} from 'react';

import {Places, Modal, DeleteConfirmation, AvailablePlaces, ErrorComponent} from './index';
import logoImg from '../assets/logo.png';
import {PlacesDataInterface} from "../types/types";
import {updateUserPlaces} from "../http";

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false) // Used in Modal with useEffect
  const selectedPlace = useRef<string>();
  const [userPlaces, setUserPlaces] = useState<PlacesDataInterface[]>([]);
  const [errorUpdatingPlaces, setErrorUpdatingplaces] = useState<{message: string} | undefined>()

  const handleStartRemovePlace = (place: PlacesDataInterface) => {
    setModalIsOpen(true)
    selectedPlace.current = place.id;
  }

  const handleStopRemovePlace = () => {
    setModalIsOpen(false)
  }

  const  handleSelectPlace = async (selectedPlace: PlacesDataInterface) => {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    // Above the local statechange before the update to the server.
    // This is called "Optimistic Updating".

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces])
    } catch (error: unknown) {
      setUserPlaces(userPlaces) // We have been too optimistic: Set it back to old version
      if (error instanceof Error) {
        setErrorUpdatingplaces({message: error.message || 'Failed to update places.'})
      }
    }
  }

  const handleRemovePlace = useCallback(async () => {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false)
  }, [])

  return (
    <Fragment>
      <Modal open={!!errorUpdatingPlaces} onClose={handleStopRemovePlace}>  {/* ref={modal} */}
        <ErrorComponent title="An error occurred!" message={errorUpdatingPlaces?.message || 'Cannot update Places'} />
      </Modal>

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

