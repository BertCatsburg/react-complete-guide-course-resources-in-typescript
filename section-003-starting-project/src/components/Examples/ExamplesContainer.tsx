import {TabButton, Section, Tabs} from "../index";
import {Example} from "./Example";
import React, {useState} from "react";

export const ExamplesContainer = () => {

  const [selectedTopic, setSelectedTopic] = useState('Please select a topic');

  const handleSelect = (selectedButton: string) => () => {
    setSelectedTopic(selectedButton);
  }

  const allbuttons = (
    <React.Fragment>
      <TabButton
        onSelect={handleSelect('components')}
        isSelected={selectedTopic === 'components'}>Components</TabButton>
      <TabButton
        onSelect={handleSelect('jsx')}
        isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
      <TabButton
        onSelect={handleSelect('props')}
        isSelected={selectedTopic === 'props'}>Props</TabButton>
      <TabButton
        onSelect={handleSelect('state')}
        isSelected={selectedTopic === 'state'}>State</TabButton>
    </React.Fragment>
  )

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={allbuttons} buttonsContainer="menu">
        <div id="tab-content">
          <Example selectedTopic={selectedTopic}/>
        </div>
      </Tabs>
    </Section>
  )
}
