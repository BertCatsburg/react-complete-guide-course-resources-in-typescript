import {Places} from './index'
import React, {useState, useEffect} from 'react'
import {PlacesDataInterface} from "../types/types";

interface AvailablePlacesInterface {
  onSelectPlace: (selectedPlace: PlacesDataInterface) => void
}

export const AvailablePlaces = ({onSelectPlace}: AvailablePlacesInterface) => {

  const [availablePlases, setAvailablePlaces] = useState<PlacesDataInterface[]>([])

  useEffect(() => {
  fetch('http://localhost:3000/places')
    .then((response) => {
      return response.json()
    })
    .then((responseJSON) => {
      setAvailablePlaces(responseJSON.places)
    })
  },[])


  return (
    <Places
      title="Available Places"
      places={availablePlases}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
