import React from "react";
import {Header, CoreConceptContainer, ExamplesContainer} from './components'

export const App = () => {


  return (
    <div className="main" id="app">
      <Header/>
      <main>
        <CoreConceptContainer/>
        <ExamplesContainer/>
      </main>
    </div>
  );
}

export default App;
