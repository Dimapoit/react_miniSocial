import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {Input} from "../Common/FormControls/FormControls";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "./Login.module.css"


const Login = (props) => {

    const onSubmitForm = (formData) => {
        console.log(formData)
        let {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmitForm}/>
        </div>
    )
}


const maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Email'} validate={[required, maxLength20]}/>
            </div>

            <div>
                <Field component={Input} name={'password'} placeholder={'Password'} validate={[required, maxLength20]}
                       type={'password'}/>
            </div>

            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>remember me
            </div>
            {
                props.error
                    ? <div className={styles.formSummError}>
                        {props.error}
                    </div>
                    : ''
            }

            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginFormRedux = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'loginForm',                           // a unique name for this form
})(LoginForm)

/*class LoginForm extends React.Component {
    render() {
        const {fields: {login, password, rememberMe}, handleSubmit} = this.props;
        //console.log(this.props)
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input type={'text'} placeholder={'Login'} {...login}/>
                </div>

                <div>
                    <input type={'text'} placeholder={'Password'} {...password}/>
                </div>

                <div>
                    <input type={'checkbox'} {...rememberMe}/>remember me
                </div>

                <div>
                    <button type="submit" >Login</button>
                </div>
            </form>
        );
    }
}


const LoginFormRedux = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'loginForm',                           // a unique name for this form
    fields: ['login', 'password', 'rememberMe'] // all the fields in your form
})(LoginForm)*/

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)