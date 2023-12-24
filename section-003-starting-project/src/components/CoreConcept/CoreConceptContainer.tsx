import React from 'react';
import {Pagetitle, Section, CoreConcept} from "../index";
import {CORE_CONCEPTS, CoreConceptInterface} from "../../data/data";

export const CoreConceptContainer = () => {
  return (
    <Section id='core-concepts' title="Core Concepts">
      <ul>
        {
          CORE_CONCEPTS.map((cc: CoreConceptInterface) => {
            // <CoreConcept key={cc.title} title={cc.title} description={cc.description} image={cc.image}/>
            return (
              <CoreConcept key={cc.title} {...cc}/>
            )
          })
        }
      </ul>
    </Section>
  )
}
