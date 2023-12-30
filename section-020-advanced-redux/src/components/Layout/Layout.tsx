import {MainHeader} from '../index'
import React, {Fragment} from 'react'

export const Layout = (props: any) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

