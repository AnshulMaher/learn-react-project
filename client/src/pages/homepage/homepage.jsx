import React, { useState, useEffect, Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/search-box/search-box.component';
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader';
import { get_users_list } from '../../redux/user/user.actions';
import Pagination from '../../components/pagiation/pagination.component';
import './homepage.styles.css';

function Homepage() {
  const dispatch = useDispatch();
  const monsters = useSelector((state) => state.user.user_list);
  const [searchText, setSearchText] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearchBoxChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    dispatch(get_users_list(currentPage, ({ total_pages }) => setTotalPages(total_pages)));
    // return () => console.log('This will run when component unmount');
  }, [currentPage]);

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
        <>
          <div className="card-list">
            {filteredMonstersData.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <Pagination className="pagination-bar" currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </>
      )}
    </div>
  );
}

export default Homepage;

// class Homepage extends Component {
//   constructor() {
//     super();

//     this.state = { searchText: '', currentPage: 1, oldCurrentPage: 1, totalPages: 0 };
//   }

//   handleSearchBoxChange = (e) => {
//     const text = e.target.value;
//     this.setState({ searchText: text });
//   };

//   handlePageChange = (page) => this.setState({ currentPage: page });

//   // mounting
//   componentDidMount() {
//     this.props.getUserList(this.state.currentPage, ({ total_pages }) => this.setState({ totalPages: total_pages }));
//   }

//   componentDidUpdate() {
//     const { currentPage, oldCurrentPage } = this.state;
//     if (oldCurrentPage !== currentPage) {
//       this.setState({ oldCurrentPage: currentPage });
//       this.props.getUserList(this.state.currentPage, ({ total_pages }) => this.setState({ totalPages: total_pages }));
//     }
//   }

//   // componentWillUnmount() {
//   //   console.log('This will run when component unmount');
//   // }

//   render() {
//     const { userList } = this.props;
//     const { searchText, currentPage, totalPages } = this.state;

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
//           <>
//             <div className="card-list">
//               {filteredUserList.map((item) => (
//                 <Card key={item.id} item={item} />
//               ))}
//             </div>
//             <Pagination className="pagination-bar" currentPage={currentPage} totalPages={totalPages} handlePageChange={this.handlePageChange} />
//           </>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   userList: state.user.user_list
// });

// const mapDispatchToProps = (dispatch) => ({
//   getUserList: (page, cb) => dispatch(get_users_list(page, cb))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
