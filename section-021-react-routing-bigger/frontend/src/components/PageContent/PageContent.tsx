import classes from './PageContent.module.css';
import React, {ReactNode} from 'react'

interface PageContentInterface {
  title: string
  children: ReactNode
}

export const PageContent = ({title, children}: PageContentInterface) => {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

