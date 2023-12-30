import {Counter, Header, Auth} from '../index';
import React from 'react'
import {Fragment} from "react";

export const App = () => {
  return (
    <Fragment>
      <Header/>
      <Auth />
      <Counter/>
    </Fragment>
  );
}
