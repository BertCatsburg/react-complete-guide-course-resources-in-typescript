import React from "react";
import {CoreConceptInterface} from "../../data/data";
import './CoreConcept.css';


export const CoreConcept: React.FC<CoreConceptInterface> = (props: CoreConceptInterface) => {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
