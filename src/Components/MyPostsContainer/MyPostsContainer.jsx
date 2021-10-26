import { addPost } from "../../Redux/profile-reducer";
import MyPosts from "../MyPosts/MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onPostChange: (text) => { dispatch(updateNewPostTextActionCreator(text))},
//         onAddPost: () => {dispatch(addPostActionCreator())}
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts)

export default MyPostsContainer;