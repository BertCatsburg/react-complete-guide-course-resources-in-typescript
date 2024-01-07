import {ActionFunctionArgs, json, redirect} from "react-router-dom";


export const RouteActionNewEvent = async ({request, params}: ActionFunctionArgs) => {
  const data = await request.formData()

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw json({message: 'Cannot save Event'}, {status: response.status, statusText: response.statusText})
  }
  return redirect('/events')
}
