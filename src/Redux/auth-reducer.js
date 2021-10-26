import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let initialState = {

    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}

export default AuthReducer;

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        userId: userId,
        login: login,
        email: email,
        isAuth: isAuth
    }
})

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                }
            })
    }
}

export const login = (email, password, rememberMe) => {

    return dispatch => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {

                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages ? response.data.messages[0] : 'SomeError'
                    //let action = stopSubmit('login', {_error: message});
                    dispatch(stopSubmit('loginForm', {_error: message}))
                }
            })
    }
}

export const logout = () => {
    return dispatch => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

