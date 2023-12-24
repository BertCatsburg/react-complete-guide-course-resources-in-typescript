import React from "react";

export interface PagetitleInterface {
  children: React.ReactNode;
}

export const Pagetitle = (props: PagetitleInterface) => {
  return (
    <p>{props.children}</p>
  )
}
