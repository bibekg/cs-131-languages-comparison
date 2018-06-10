import React, { Component } from 'react';
import patternsData from './data/patterns-data';
import PatternComparisons from './components/PatternComparisons';
import Definitions from './components/Definitions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PatternComparisons patterns={patternsData} />
        <hr />
        <Definitions />
      </div>
    );
  }
}

export default App;
