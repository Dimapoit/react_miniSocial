const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state = {

    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!!!'},
        {id: 4, message: 'Yo!!!'},
        {id: 5, message: 'Yo!!!'}
    ]
}, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.messageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}
export default dialogsReducer;

// ActionCreator
export const sendMessage = (messageBody) => ({type: SEND_MESSAGE, messageBody: messageBody})