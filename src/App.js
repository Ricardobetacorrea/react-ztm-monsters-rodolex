import './App.css';

import CardList from './components/card-list/card-list.component';
import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component'

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    let users = fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        }
      ));
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLocaleLowerCase() };
    })
  }

  filterMonsters = () => {
    return this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
  }

  render() {
    return (
      <div className="App">

        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox 
          onChange={this.onSearchChange}
          placeholder='Search Monsters'
          className='monsters-search-box' />
        <CardList monsters={this.filterMonsters()} />
      </div>
    )
  }
}
