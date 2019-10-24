import React, { Component } from 'react';
import './App.css';
import ActorsList from "./components/ActorsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ironhack Contacts</h1>
        <ActorsList/>
      </div>
    );
  }
}

export default App;
