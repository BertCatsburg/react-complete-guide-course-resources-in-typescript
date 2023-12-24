import {Places, ErrorComponent} from './index'
import React, {useEffect, useState} from 'react'
import {PlacesDataInterface} from "../types/types";

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
        const response = await fetch('http://localhost:3000/places')

        if (!response.ok) {
          // noinspection ExceptionCaughtLocallyJS
          throw new Error() as Error
        }
        const resData = await response.json()
        setAvailablePlaces(resData.places)

      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage({message: error.message || 'Could not fetch Places, please try again later'})
        }
      }
      setIsFetching(false)
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
