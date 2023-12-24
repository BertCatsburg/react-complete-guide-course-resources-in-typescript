import {PlacesDataInterface} from "./types/types";


export const fetchAvailablePlaces = async (): Promise<PlacesDataInterface[]> => {
  const response = await fetch('http://localhost:3000/places')

  if (!response.ok) {
    // noinspection ExceptionCaughtLocallyJS
    throw new Error() as Error
  }
  const resData = await response.json()

  return resData.places
}

export const updateUserPlaces = async (places: PlacesDataInterface[]): Promise<string> => {
  console.log(places)
  const response = await fetch(
    'http://localhost:3000/user-places',
    {
      method: 'PUT',
      body: JSON.stringify({places}),
      headers: {
        'Content-Type': 'application/json'
      }
    },
  )

  const resData = await response.json()
  if (!response.ok) {
    throw new Error('Failed to update user data.') as Error
  }

  return resData.message
}
