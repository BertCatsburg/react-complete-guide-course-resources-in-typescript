import React from 'react';
import {Pagetitle} from "./Pagetitle";

export interface SectionInterface {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section = ({title, children, id}: SectionInterface) => {
  return (
    <section id={id}>
      <Pagetitle>{title}</Pagetitle>
      {children}
    </section>
  )
}
