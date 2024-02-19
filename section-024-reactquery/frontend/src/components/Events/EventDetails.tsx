import {Link,  useParams, useNavigate} from 'react-router-dom';
import React from 'react'
import {QueryFunctionContext, useQuery} from "@tanstack/react-query";
import {fetchEvent} from '../../util'

import {Header} from '../UI'

export const EventDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  console.log('[EventDetails] - Entering')

  if (!id) {
    // Won't happen because Router will take over then.
    console.error('[EventDetails] - We are here without an id ??')
    navigate('/events')
    return // To make linter happen in the rest of the code.
  } else {
    console.log(`[EventDetails] - Passed ID = ${id}`)
  }

  const {
    data,
    // isPending,
    // isError,
    // error
  } = useQuery({
    queryKey: ['events', {id: id}],
    queryFn: ({signal}: QueryFunctionContext) => fetchEvent({id, signal}),
  })


  return (
    <>
      {/*<Outlet/>*/}
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {data &&
          <article id="event-details">
              <header>
                  <h1>{data.title}</h1>
                  <nav>
                      <button>Delete</button>
                      <Link to="edit">Edit</Link>
                  </nav>
              </header>
              <div id="event-details-content">
                  <img src="" alt=""/>
                  <div id="event-details-info">
                      <div>
                          <p id="event-details-location">EVENT LOCATION</p>
                          <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
                      </div>
                      <p id="event-details-description">EVENT DESCRIPTION</p>
                  </div>
              </div>
          </article>
      }
    </>
  );
}
