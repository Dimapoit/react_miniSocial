import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {Textarea} from "../Common/FormControls/FormControls";

const MyPosts = (props) => {

    //let newPostEl = React.createRef();

    let postsElements = props.profilePage.posts.map(post =>

        <Post image={post.imagePath} message={post.message} likesCount={post.likesCount} key={post.id} />
    )

    let addPost = (formData) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.myPosts}>

            <h1>My posts</h1>
            <AddPostFormRedux onSubmit={addPost} />

            {postsElements}
        </div>

    )
}


const maxLength50 = maxLengthCreator(50)
const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name={'newPostText'}
                    cols="80" rows="3" />
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'AddPostForm'})(AddPostForm)

export default MyPosts;