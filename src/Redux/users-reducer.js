import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let obj = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = obj, action) => {

    switch (action.type) {

        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                //users: [...state.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            let state1 = {
                ...state,
                followingInProgress: action.isProgress
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => !(id === action.userId))]
            }
            return state1;
        default:
            return state;
    }
}

export default usersReducer

export const followUser = (userId) => ({type: FOLLOW, userId: userId})

export const unfollowUser = (userId) => ({type: UNFOLLOW, userId: userId})

export const setUsers = (users) => ({type: SET_USERS, users: users})

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})

export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: count})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})

export const toggleFollowingProgress = (isProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS,
                                                                  isProgress: isProgress,
                                                                  userId: userId })

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setCurrentPage(currentPage))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowUser(userId))
                } else {
                    alert(response.data.messages[0])
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followUser(userId))
                    dispatch(toggleFollowingProgress(false, userId));
                } else {
                    alert(response.data.messages[0])
                }
            })
    }
}