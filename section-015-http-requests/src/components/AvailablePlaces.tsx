import {Places, ErrorComponent} from './index'
import React, {useEffect, useState} from 'react'
import {PlacesDataInterface} from "../types/types";

interface AvailablePlacesInterface {
  onSelectPlace: (selectedPlace: PlacesDataInterface) => void
}

export const AvailablePlaces = ({onSelectPlace}: AvailablePlacesInterface) => {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState<PlacesDataInterface[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect( () => {
    const fetchPlaces = async () => {
      setIsFetching(true)

      // noinspection ExceptionCaughtLocallyJS
      try {
        const response = await fetch('http://localhost:3000/placesss')

        if (!response.ok) {
          // noinspection ExceptionCaughtLocallyJS
          throw new Error('Failed to fetched places') as Error
        }
        const resData = await response.json()
        setAvailablePlaces(resData.places)

      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage(error.message)
        }
      }
      setIsFetching(false)
    }

    fetchPlaces()
  },[])

  if (errorMessage) {
    return (
      <ErrorComponent title="Error on Fetching Data" message={errorMessage}  />
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
