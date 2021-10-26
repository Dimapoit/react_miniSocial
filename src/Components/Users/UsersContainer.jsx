import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
   // setUsers,
   // setCurrentPage,
   // setTotalUsersCount,
   // toggleIsFetching,
   // toggleFollowingProgress,
    requestUsers

} from "../../Redux/users-reducer";
import React from "react";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    //getUsers,
    getUsersReselect
} from "../../Redux/users-selectors";

//import {requestUsers} from "../../api/api";

class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     axios
    //         .get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    // }

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // usersAPI.requestUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        // usersAPI.requestUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {

        return (<Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
        />)
    }
}

const mapStateToProps = (state) => {
    return (
        {
            //users: getUsers(state),
            users: getUsersReselect(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state)
        }
    )
}

// const mapDispathToProps = (dispatch) => {
//     return (
//         {
//             follow: (userId) => {
//                 dispatch(follow(userId))
//             },
//             unfollow: (userId) => {
//                 dispatch(unfollow(userId))
//             },
//             setUsers: (users) => {
//                 dispatch(setUsers(users))
//             },
//             setCurrentPage: (page) => {
//                 dispatch(setCurrentPage(page))
//             },
//             setTotalUsersCount: (count) => {
//                 dispatch(setTotalUsersCount(count))
//             },
//             toggleIsFetching: (isFetching) => {
//                dispatch(toggleIsFetching(isFetching))
//             }
//         }
//     )
// }
export default connect(mapStateToProps, {
    follow,
    unfollow,
    // setUsers,
    // setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    // toggleFollowingProgress,
    getUsers: requestUsers
})(UsersContainer)