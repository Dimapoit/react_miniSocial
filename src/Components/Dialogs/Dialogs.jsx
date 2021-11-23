import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import {Field, reset, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>

        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.dialogsPage.messages.map(message =>

        <Message message={message.message} id={message.id}/>
    );

    const onAddMessage = (formData) => {
        props.sendMessage(formData.messageBody)
    }

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>

                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={onAddMessage}/>
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'messageBody'}
                       placeholder='Enter your message'
                       cols="68" rows="3">
                </Field>
            </div>
            <div>
                <button>SendMessage</button>
            </div>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('addMessageForm'));

const AddMessageFormRedux = reduxForm({
    form: 'addMessageForm',
    onSubmitSuccess: afterSubmit
})(AddMessageForm)

export default Dialogs;