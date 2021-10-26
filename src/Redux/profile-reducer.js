import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const profileReducer = (state = {
    posts: [
        {id: 1, imagePath: '/images/user-1.jpg', message: 'Hello React', likesCount: 2},
        {id: 2, imagePath: '/images/user-2.jpg', message: 'Hello Swift', likesCount: 5},
        {id: 3, imagePath: '/images/user-3.jpg', message: 'Hello Javascript', likesCount: 10}
    ],
    profile: null,
    status: ''
}, action) => {

    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: state.posts.length + 1,
                imagePath: '/images/user-1.jpg',
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

}

export default profileReducer;

//ActionCreators

export const addPost = (newPostText) => ({type: ADD_POST, newPostText: newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})

export const setUserStatus = (status) => ({type: SET_STATUS, status: status})

//Thunks
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                //this.props.toggleIsFetching(false)
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}