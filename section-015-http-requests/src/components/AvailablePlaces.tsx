import {Places} from './index'
import React from 'react'
import {PlacesDataInterface} from "../types/types";

interface AvailablePlacesInterface {
  onSelectPlace: (selectedPlace: PlacesDataInterface) => void
}

export const   AvailablePlaces = ({onSelectPlace}: AvailablePlacesInterface) => {
  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
