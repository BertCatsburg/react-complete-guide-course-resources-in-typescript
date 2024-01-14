import {Link, Outlet} from 'react-router-dom';
import React from 'react'

import {Header} from '../UI'
import EventsIntroSection from './EventsIntroSection.jsx';
import {FindEventSection, NewEventsSection} from './index'

export const Events = () => {
  return (
    <>
      <Outlet/>
      <Header>
        <Link to="/events/new" className="button">
          New Event
        </Link>
      </Header>
      <main>
        <EventsIntroSection/>
        <NewEventsSection/>
        <FindEventSection/>
      </main>
    </>
  );
}
