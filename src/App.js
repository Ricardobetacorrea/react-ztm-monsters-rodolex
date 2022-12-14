import './App.css';

import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

const App = () => {

  const [ searchField, setSearchField ] = useState('');
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState( monsters );

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      })
    )
  }, [ monsters, searchField ]);

  const onSearchChange = (event) => {
    setSearchField(event?.target?.value?.toLocaleLowerCase() || '');
  }

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
        onChange={onSearchChange}
        placeholder='Search Monsters'
        className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;