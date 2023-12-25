import React, {useRef, useState, Fragment, useCallback} from 'react';

import {Places, Modal, DeleteConfirmation, AvailablePlaces, ErrorComponent} from './index';
import logoImg from '../assets/logo.png';
import {PlacesDataInterface} from "../types/types";
import {fetchUserPlaces, updateUserPlaces} from "../http";
import {useFetch} from "../hooks";

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false) // Used in Modal with useEffect
  const selectedPlace = useRef<string>();
  // const [_userPlaces, setUserPlaces] = useState<PlacesDataInterface[]>([]);
  const [errorUpdatingPlaces, setErrorUpdatingplaces] = useState<{
    message: string
  } | undefined>()

  const {
    isFetching,
    errorMessage,
    fetchedData: userPlaces,
    setFetchedData,
  } = useFetch({
    fetchFunction: fetchUserPlaces,
    initialValue: []
  })

  const handleStartRemovePlace = (place: PlacesDataInterface) => {
    setModalIsOpen(true)
    selectedPlace.current = place.id;
  }

  const handleStopRemovePlace = () => {
    setModalIsOpen(false)
  }

  const handleSelectPlace = async (selectedPlace: PlacesDataInterface) => {
    setFetchedData((prevPickedPlaces:PlacesDataInterface[]) => {
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
      setFetchedData(userPlaces) // We have been too optimistic: Set it back to old version
      if (error instanceof Error) {
        setErrorUpdatingplaces({message: error.message || 'Failed to update places.'})
      }
    }
  }

  const handleRemovePlace = useCallback(async () => {
    setFetchedData((prevPickedPlaces: PlacesDataInterface[]) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    try {
      await updateUserPlaces(
        userPlaces.filter((place: PlacesDataInterface) => place.id !== selectedPlace.current)
      )
    } catch (error) {
      if (error instanceof Error) {
        setFetchedData(userPlaces)
        setErrorUpdatingplaces({message: error.message || `Cannot Delete a Place with id ${selectedPlace.current}`})
      }
    }
    setModalIsOpen(false)
  }, [userPlaces, setFetchedData])


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

