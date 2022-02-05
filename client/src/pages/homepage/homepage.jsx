import React, { useState, useEffect, Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/search-box/search-box.component';
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader';
import { get_users_list } from '../../redux/user/user.actions';
import './homepage.styles.css';

function Homepage() {
  const dispatch = useDispatch();
  const monsters = useSelector((state) => state.user.user_list);
  const [searchText, setSearchText] = useState('');

  const handleSearchBoxChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  useEffect(() => dispatch(get_users_list()), []);

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

//     this.state = { searchText: '' };
//   }

//   handleSearchBoxChange = (e) => {
//     const text = e.target.value;
//     this.setState({ searchText: text });
//   };

//   // mounting
//   componentDidMount() {
//      this.props.getUserList();
//   }

//   render() {
//     const { userList } = this.props;
//     const { searchText } = this.state;

//     const filteredUserList = userList.filter((item) => {
//       const name = `${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()}`;
//       return name.includes(searchText.toLowerCase());
//     });

//     return (
//       <div id="homePageContainer">
//         <SearchBox value={searchText} handleSearchBoxChange={this.handleSearchBoxChange} />
//         {filteredUserList.length < 1 ? (
//           <Loader />
//         ) : (
//           <div className="card-list">
//             {filteredUserList.map((item) => (
//               <Card key={item.id} item={item} />
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   userList: state.user.user_list
// });

// const mapDispatchToProps = (dispatch) => ({
//   getUserList: () => dispatch(get_users_list())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
