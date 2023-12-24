

export const fetchAvailablePlaces = async () => {
  const response = await fetch('http://localhost:3000/places')

  if (!response.ok) {
    // noinspection ExceptionCaughtLocallyJS
    throw new Error() as Error
  }
  const resData = await response.json()

  return resData.places

}
