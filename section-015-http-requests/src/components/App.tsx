import React, {useRef, useState, Fragment, useCallback, useEffect} from 'react';

import {Places, Modal, DeleteConfirmation, AvailablePlaces, ErrorComponent} from './index';
import logoImg from '../assets/logo.png';
import {PlacesDataInterface} from "../types/types";
import {fetchUserPlaces, updateUserPlaces} from "../http";

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false) // Used in Modal with useEffect
  const selectedPlace = useRef<string>();
  const [userPlaces, setUserPlaces] = useState<PlacesDataInterface[]>([]);
  const [isFetching, setIsFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState<{
    message: string
  } | undefined>(undefined)
  const [errorUpdatingPlaces, setErrorUpdatingplaces] = useState<{
    message: string
  } | undefined>()

  useEffect(() => {
    const fetchPlace = async () => {
      setIsFetching(true)
      try {
        const places = await fetchUserPlaces()
        setUserPlaces(places)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage({message: error.message || 'Failed to fetch User Places'})
        }
      }
      setIsFetching(false)
    }
    fetchPlace()
  }, []);

  const handleStartRemovePlace = (place: PlacesDataInterface) => {
    setModalIsOpen(true)
    selectedPlace.current = place.id;
  }

  const handleStopRemovePlace = () => {
    setModalIsOpen(false)
  }

  const handleSelectPlace = async (selectedPlace: PlacesDataInterface) => {
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
    try {
      await updateUserPlaces(
        userPlaces.filter((place: PlacesDataInterface) => place.id !== selectedPlace.current)
      )
    } catch (error) {
      if (error instanceof Error) {
        setUserPlaces(userPlaces)
        setErrorUpdatingplaces({message: error.message || `Cannot Delete a Place with id ${selectedPlace.current}`})
      }
    }
    setModalIsOpen(false)
  }, [userPlaces])


  const handleError = () => {
    setErrorUpdatingplaces(undefined)
  }

  return (
    <Fragment>
      <Modal open={!!errorUpdatingPlaces} onClose={handleStopRemovePlace}>  {/* ref={modal} */}
        {errorUpdatingPlaces && (
          <ErrorComponent
            title="An error occurred!"
            message={errorUpdatingPlaces?.message || 'Cannot update Places'}
            onConfirm={handleError}
          />
        )}
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
        {errorMessage && <ErrorComponent title="An Error occurred!" message={errorMessage.message}/>}
        {
          !errorMessage &&
            <Places
                title="I'd like to visit ..."
                fallbackText={'Select the places you would like to visit below.'}
                isLoading={isFetching}
                loadingText="Fetching your places..."
                places={userPlaces}
                onSelectPlace={handleStartRemovePlace}
            />
        }
        <AvailablePlaces onSelectPlace={handleSelectPlace}/>
      </main>
    </Fragment>
  );
}

