import React, {useRef, useState, Fragment, useEffect, useCallback} from 'react';

import {Places, Modal, DeleteConfirmation} from './index';
import {AVAILABLE_PLACES} from '../data/data';
import logoImg from '../assets/logo.png';
import {PlacesDataInterface} from "../types/types";
import {sortPlacesByDistance} from '../loc.js'

// This code outside the App Component because it's ok that this code runs once,
// not every time the App component rerenders.
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]')
const storedPlaces = storedIds.map((id: string) => AVAILABLE_PLACES.find((place) => place.id === id))

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false) // Used in Modal with useEffect
  const selectedPlace = useRef<string>();
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [pickedPlaces, setPickedPlaces] = useState<PlacesDataInterface[]>(storedPlaces);


  useEffect(() => {
    // Will be executed AFTER every component execution
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      )
      setAvailablePlaces(sortedPlaces)
    })
  }, [])



  const handleStartRemovePlace = (id: string) => {
    setModalIsOpen(true)
    selectedPlace.current = id;
  }

  const handleStopRemovePlace = () => {
    setModalIsOpen(false)
  }

  const handleSelectPlace = (id: string) => {
    setPickedPlaces((prevPickedPlaces): PlacesDataInterface[] => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }

      const place: PlacesDataInterface | undefined = AVAILABLE_PLACES.find((place) => place.id === id);
      if (place) {
        return [place, ...prevPickedPlaces];
      } else {
        return [...prevPickedPlaces]
      }
    });
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]')
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id]))
    }
  }

  const handleRemovePlace = useCallback(() => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false)

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]')
    localStorage.setItem(
      'selectedPlaces',
      JSON.stringify(storedIds.filter((s: string) => s !== selectedPlace.current))
    )
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
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </Fragment>
  );
}

