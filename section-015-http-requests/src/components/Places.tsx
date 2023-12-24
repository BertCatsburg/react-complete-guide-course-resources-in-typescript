import React from 'react'
import {PlacesDataInterface} from "../types/types";

interface PlacesInterface {
  title: string
  places: PlacesDataInterface[]
  fallbackText?: string | undefined
  onSelectPlace: (selectedPlace: PlacesDataInterface) => void
  isLoading: boolean
  loadingText: string
}

export const Places = ({title, places, fallbackText, onSelectPlace, isLoading, loadingText}: PlacesInterface) => {
  return (
    <section className="places-category">

      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}

      {!isLoading && places.length === 0 && <p className='fallback-text'>{fallbackText}</p>}

      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => {
            return (
              <li key={place.id} className="place-item">
                <button onClick={() => onSelectPlace(place)}>
                  <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt}/>
                  <h3>{place.title}</h3>
                </button>
              </li>
            )
          })
          }
        </ul>
      )}

    </section>
  );
}
