import {Places, ErrorComponent} from './index'
import React, {useEffect, useState} from 'react'
import {PlacesDataInterface} from "../types/types";
import {sortPlacesByDistance} from '../loc.js'
import { fetchAvailablePlaces} from "../http";

interface AvailablePlacesInterface {
  onSelectPlace: (selectedPlace: PlacesDataInterface) => void
}

export const AvailablePlaces = ({onSelectPlace}: AvailablePlacesInterface) => {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState<PlacesDataInterface[]>([])
  const [errorMessage, setErrorMessage] = useState<{message: string} | undefined>(undefined)

  useEffect( () => {
    const fetchPlaces = async () => {
      setIsFetching(true)

      try {
        const places = await fetchAvailablePlaces()

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
            )
          setAvailablePlaces(sortedPlaces)
          setIsFetching(false)
        })
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage({message: error.message || 'Could not fetch Places, please try again later'})
        }
        setIsFetching(false)
      }
    }
    fetchPlaces()
  },[])

  if (errorMessage) {
    return (
      <ErrorComponent title="Error on Fetching Data" message={errorMessage.message}  />
    )
  }

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
