import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        //this.props.toggleIsFetching(true)
        let userId = this.props.match.params.userId
        if (!this.props.match.params.userId) {
            userId = this.props.authorizedUserId
            if (!this.props.authorizedUserId) {
                //userId = 18715
                this.props.history.push('/login')
            }

        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props} />
        )
    }

}

// let authRedirectComponent = (props) => {
//     if(!props.isAuth) {return <Redirect to={'/login'} />}
//     return <ProfileContainer {...props} />
// }

//let authRedirectComponent = withAuthRedirect(ProfileContainer)

// const mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })
//
// let authRedirectComponent = connect(mapStateToPropsForRedirect)(withAuthRedirect(authRedirectComponent))
//
//let WithUrlDataContainerComponent = withRouter(authRedirectComponent)


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})

//connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

export default compose(
    connect(mapStateToProps,
        {getUserProfile, getUserStatus, updateStatus, savePhoto}),
    withRouter
    /* ,withAuthRedirect */)(ProfileContainer)