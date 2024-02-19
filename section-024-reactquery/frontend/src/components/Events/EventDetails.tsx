import {Link, useParams, useNavigate} from 'react-router-dom';
import React from 'react'
import {QueryFunctionContext, useQuery, useMutation} from "@tanstack/react-query";
import {fetchEvent, deleteEvent, queryClient} from '../../util'
import {ErrorBlock, Header, LoadingIndicator} from '../UI'

export const EventDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()

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
    isPending,
    isError,
    error
  } = useQuery({
    queryKey: ['events', {id: id}],
    queryFn: ({signal}: QueryFunctionContext) => fetchEvent({id, signal}),
  })

  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events'], refetchType: 'none'})
      // After the invalidation, you are still on this page, so a refetch is done, which results in an 404
      // Therefore the refetchType: None, which says: Wait with refetching until you need it.
      navigate('/events')
    }
  })

  const handleDelete = () => {
    mutate({id: id})
  }

  let content;

  if (isPending) {
    content = <div id="event-details-content" className="center"><LoadingIndicator/></div>;
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Error in getting 1 Event"
          message={error.message || 'Failed to fetch Event'}
        />
      </div>
    )
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title}/>
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`${data.date}T${data.time}`}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
