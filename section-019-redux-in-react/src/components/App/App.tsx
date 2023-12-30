import {Counter, Header, Auth, UserProfile} from '../index';
import React from 'react'
import {Fragment} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

export const App = () => {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <Fragment>
      <Header/>
      {
        isAuthenticated
          ? <UserProfile/>
          : <Auth/>
      }
      <Counter/>
    </Fragment>
  );
}
