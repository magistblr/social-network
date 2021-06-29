import React from 'react';
import { connect} from "react-redux";
import { follow, setCurrentPages, unfollow, toggleFollowingProgress, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Spinner from '../Spinner/Spinner';


class UsersContainer extends React.Component {


  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {

      return (<>
          {this.props.isFetching ? <Spinner/> : null}
          <Users  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  followingInProgress={this.props.followingInProgress}
          />
      </>
    )
  }
}



let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}



// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPagesAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

//ниже в коннекте сокращенный код, переданный вторым аргументом ввиде объекта (если значение == свойству follow: follow, то можно писать в одно слово)


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPages,
    toggleFollowingProgress,
    getUsers
  }) (UsersContainer);