import React, { useState, useEffect } from 'react';
import SearchBox from '../../components/search-box/search-box.component';
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader';
import { api_call, REQUEST_TYPE } from '../../api';
import { USERS } from '../../api/routes';
import "./homepage.styles.css";

function Homepage() {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearchBoxChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  useEffect(() => {
    api_call(USERS, REQUEST_TYPE.GET).then((response) => setMonsters(response.data))
  }, []);

  const filteredMonstersData = monsters.filter((item) => {
    const name = item.first_name.toLowerCase();
    if (name.includes(searchText.toLowerCase())) return item;
  });

  return (
    <>
      <h1>User management</h1>
      <SearchBox value={searchText} handleSearchBoxChange={handleSearchBoxChange} />
      {filteredMonstersData.length < 1 ? (
        <Loader/>
      ) : (
        <div className="card-list">
          {filteredMonstersData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default Homepage;

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
//     //   const name = item.first_name.toLowerCase();
//     //   if (name.includes(text.toLowerCase())) return item;
//     // });

//     // this.setState({ filteredMonstersData: filteredData });
//   };

//   // mounting
//   componentDidMount() {
//     api_call(USERS, REQUEST_TYPE.GET).then((response) => this.setState({monsters: response.data});
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
// export default Homepage;
