import React, { Component, useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
// import monstersData from './data/data.json';
import SearchBox from './components/search-box/search-box.component';
import Card from './components/card/card.component';
import axios from 'axios';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearchBoxChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => setMonsters(response.data));
  }, []);

  const filteredMonstersData = monsters.filter(function (item) {
    const name = item.name.toLowerCase();
    if (name.includes(searchText.toLowerCase())) return item;
  });

  return (
    <div className="App">
      <SearchBox value={searchText} handleSearchBoxChange={handleSearchBoxChange} />
      {filteredMonstersData.length < 1 ? (
        <p>Loading....</p>
      ) : (
        filteredMonstersData.map(function (item) {
          return <Card key={item.id} item={item} />;
        })
      )}
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       // filteredMonstersData: [],
//       searchText: ''
//     };
//   }

//   handleSearchBoxChange = (e) => {
//     const text = e.target.value;
//     this.setState({ searchText: text });

//     // const { monsters } = this.state;
//     // const filteredData = monsters.filter(function (item) {
//     //   const name = item.name.toLowerCase();
//     //   if (name.includes(text.toLowerCase())) return item;
//     // });

//     // this.setState({ filteredMonstersData: filteredData });
//   };

//   // mounting, updting, unmount
//   // mounting
//   componentDidMount() {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => this.setState({ monsters: response.data }));
//   }

//   render() {
//     // const { searchText, filteredMonstersData } = this.state;
//     const { searchText, monsters } = this.state;

//     const filteredMonstersData = monsters.filter(function (item) {
//       const name = item.name.toLowerCase();
//       if (name.includes(searchText.toLowerCase())) return item;
//     });

//     return (
//       <div className="App">
//         <SearchBox value={searchText} handleSearchBoxChange={this.handleSearchBoxChange} />
//         {filteredMonstersData.map(function (item) {
//           return <Card key={item.id} item={item} />;
//         })}
//       </div>
//     );
//   }
// }

export default App;
