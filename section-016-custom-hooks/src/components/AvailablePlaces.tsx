import {Places, ErrorComponent} from './index'
import React from 'react'
import {PlacesDataInterface} from "../types/types";
import {sortPlacesByDistance} from '../loc.js'
import {fetchAvailablePlaces} from "../http";
import {useFetch} from "../hooks";


interface AvailablePlacesInterface {
  onSelectPlace: (selectedPlace: PlacesDataInterface) => void
}

const fetchSortedPlaces = async () => {
  const places = await fetchAvailablePlaces()

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      )

      resolve(sortedPlaces)
    })
  })
}

export const AvailablePlaces = ({onSelectPlace}: AvailablePlacesInterface) => {

  const {
    isFetching,
    errorMessage,
    fetchedData: availablePlaces,
  } = useFetch({
    fetchFunction: fetchSortedPlaces, initialValue: []
  })

  if (errorMessage) {
    return (
      <ErrorComponent title="Error on Fetching Data" message={errorMessage.message}/>
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
