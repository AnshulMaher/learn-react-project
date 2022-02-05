import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/search-box/search-box.component';
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader';
import { api_call, REQUEST_TYPE } from '../../api';
import { USERS } from '../../api/routes';
import './homepage.styles.css';
import { set_users_list_action } from '../../redux/user/user.actions';

function Homepage() {
  const dispatch = useDispatch();
  const monsters = useSelector((state) => state.user.user_list);
  const [searchText, setSearchText] = useState('');

  const handleSearchBoxChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  useEffect(() => {
    api_call(USERS, REQUEST_TYPE.GET).then((response) => {
      dispatch(set_users_list_action(response.data));
    });
  }, []);

  const filteredMonstersData = monsters.filter((item) => {
    const name = `${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()}`;
    if (name.includes(searchText.toLowerCase())) return item;
  });

  return (
    <div id="homePageContainer">
      <SearchBox searchText={searchText} handleSearchBoxChange={handleSearchBoxChange} />
      {filteredMonstersData.length < 1 ? (
        <Loader />
      ) : (
        <div className="card-list">
          {filteredMonstersData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;

// class Homepage extends Component {
//   constructor() {
//     super();

//     this.state = { monsters: [], searchText: '' };
//   }

//   handleSearchBoxChange = (e) => {
//     const text = e.target.value;
//     this.setState({ searchText: text });
//   };

//   // mounting
//   componentDidMount() {
//     api_call(USERS, REQUEST_TYPE.GET).then((response) => this.setState({ monsters: response.data }));
//   }

//   render() {
//     const { searchText, monsters } = this.state;

//     const filteredMonstersData = monsters.filter((item) => {
//       const name = `${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()}`;
//       return name.includes(searchText.toLowerCase());
//     });

//     return (
//       <div id="homePageContainer">
//         <SearchBox value={searchText} handleSearchBoxChange={this.handleSearchBoxChange} />
//         {filteredMonstersData.length < 1 ? (
//           <Loader />
//         ) : (
//           <div className="card-list">
//             {filteredMonstersData.map((item) => (
//               <Card key={item.id} item={item} />
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Homepage;
