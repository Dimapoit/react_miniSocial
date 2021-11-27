import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos: photos})

//ThunkCreators

// export const getUserProfile = (userId) => {
//     return (dispatch) => {
//         usersAPI.getProfile(userId)
//             .then(response => {
//                 dispatch(setUserProfile(response.data))
//             })
//     }
// }

export const getUserProfile = (userId) => async dispatch => {

    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

// export const getUserStatus = (userId) => {
//     return (dispatch) => {
//         profileAPI.getStatus(userId)
//             .then(response => {
//                 dispatch(setUserStatus(response.data))
//             })
//     }
// }

export const getUserStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

// export const updateStatus = (status) => (dispatch) => {
//     profileAPI.updateStatus(status)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setUserStatus(status))
//             }
//         })
// }

export const updateStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {

    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}