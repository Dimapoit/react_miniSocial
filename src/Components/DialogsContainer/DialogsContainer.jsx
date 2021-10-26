import {sendMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "../Dialogs/Dialogs";
import {connect} from "react-redux";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// let authRedirectComponent = (props) => {
//     if(!props.isAuth) {return <Redirect to={'/login'} />}
//     return <Dialogs {...props} />
// }

// let authRedirectComponent = (props) => {
//     if(!props.isAuth) {return <Redirect to={'/login'} />}
//     return <Dialogs {...props} />
// }

//let authRedirectComponent = withAuthRedirect(Dialogs)


// const mapStateToPropsForRedirect = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }
// let authRedirectComponent = connect(mapStateToPropsForRedirect)(withAuthRedirect(authRedirectComponent))


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onNewMessageChange: (text) => { dispatch(updateNewMessageTextCreator(text))},
//         onSendMessageClick: () => {dispatch(sendMessageCreator())}
//     }
// }


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
        //,isAuth: state.auth.isAuth
    }
}

//const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(authRedirectComponent)

export default compose(
    connect(mapStateToProps, {sendMessage})

    //withAuthRedirect
)(Dialogs);