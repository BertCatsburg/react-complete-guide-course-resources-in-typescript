import {Places} from './index'
import React, {useState, useEffect} from 'react'
import {PlacesDataInterface} from "../types/types";

interface AvailablePlacesInterface {
  onSelectPlace: (selectedPlace: PlacesDataInterface) => void
}

export const AvailablePlaces = ({onSelectPlace}: AvailablePlacesInterface) => {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState<PlacesDataInterface[]>([])

  useEffect( () => {
    const fetchPlaces = async () => {
      setIsFetching(true)
      const response = await fetch('http://localhost:3000/places')
      const resData = await response.json()
      setAvailablePlaces(resData.places)
      setIsFetching(false)
    }

    fetchPlaces()
  },[])


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      loadingText="Fetching place data..."
      isLoading={isFetching}
      onSelectPlace={onSelectPlace}
    />
  );
}
