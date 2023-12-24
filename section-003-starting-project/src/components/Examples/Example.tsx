import React from 'react';
import './Example.css';
import {ExampleInterface, EXAMPLES} from "../../data/data";


export const Example = ({selectedTopic}: { selectedTopic: string }) => {

  const selectedExample: ExampleInterface | undefined = EXAMPLES.find((e) => {
    return e.key == selectedTopic
  })

  if (!selectedExample) {
    return (<h3>Please select a topic</h3>)
  }
  return (
    <React.Fragment>
      <h3>{selectedExample.title}</h3>
      <p>{selectedExample.description}</p>
      <pre>
        <code>
          {selectedExample.code}
        </code>
      </pre>
    </React.Fragment>
  )
}
