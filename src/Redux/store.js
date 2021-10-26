import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, imagePath: '/images/user-1.jpg', message: 'Hello React', likesCount: 2},
                {id: 2, imagePath: '/images/user-2.jpg', message: 'Hello Swift', likesCount: 5},
                {id: 3, imagePath: '/images/user-3.jpg', message: 'Hello Javascript', likesCount: 10}
            ],
            newPostText: 'qqq'
        },
        messagesPage: {

            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            newMessageText: '',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!!!'},
                {id: 4, message: 'Yo!!!'},
                {id: 5, message: 'Yo!!!'}
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callBackSubscriber = observer
    },
    _callBackSubscriber() {

    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callBackSubscriber(this);
    }
}

export default store;