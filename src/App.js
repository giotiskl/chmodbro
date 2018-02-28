import React, { Component } from 'react';
import './App.css';
import PermissionsTable from './components/PermissionsTable';
import ChmodCode from './components/ChmodCode'

class App extends Component {
  render() {
    return (
      <main className="App">
        <PermissionsTable></PermissionsTable>
        <ChmodCode code="644"></ChmodCode>
      </main>
    );
  }
}

export default App;
