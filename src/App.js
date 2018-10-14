import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p>Welcome !</p>
        <Ninjas name="Ryu" age="25" belt="black"/>
        <hr/>
        <Ninjas name="Divyam" age="19" belt="blue"/>
      </div>
    );
  }
}

export default App;
