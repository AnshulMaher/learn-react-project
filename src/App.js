import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import monstersData from "./data/data.json";
import SearchBox from './components/search-box/search-box.component';
import Card from './components/card/card.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: monstersData.data,
      // filteredMonstersData: [],
      searchText: ''
    };
  }

  handleSearchBoxChange = (e) => {
    const text = e.target.value;
    this.setState({ searchText: text });

    // const { monsters } = this.state;
    // const filteredData = monsters.filter(function (item) {
    //   const name = item.name.toLowerCase();
    //   if (name.includes(text.toLowerCase())) return item;
    // });

    // this.setState({ filteredMonstersData: filteredData });
  };

  // mounting, updting, unmount
  // mounting
  // componentDidMount() {
  //   this.setState({ filteredMonstersData: [...this.state.monsters] });
  // }

  render() {
    // const { searchText, filteredMonstersData } = this.state;
    const { searchText, monsters } = this.state;

    const filteredMonstersData = monsters.filter(function (item) {
      const name = item.name.toLowerCase();
      if (name.includes(searchText.toLowerCase())) return item;
    });

    return (
      <div className="App">
        <SearchBox value={searchText} handleSearchBoxChange={this.handleSearchBoxChange} />
        {filteredMonstersData.map(function (item) {
          return <Card key={item.id} item={item}  />
        })}
      </div>
    );
  }
}

export default App;
