import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: { firstName: 'Ricardo', lastName: 'Betancourt' },
      company: 'OSC'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hola {this.state.name.firstName } { this.state.name.lastName }, trabajas en {this.state.company} de momento</p>
          <button onClick={() => { this.setState({ name: { firstName: 'Fabián Ricardo', lastName: 'Betancourt Correa' }}) }}>
            Cambiar nombre
          </button>
        </header>
      </div>
    );
  }
}

export default App;
