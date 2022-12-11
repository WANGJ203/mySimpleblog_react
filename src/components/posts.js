import React, {useState, useEffect} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import AuthorName from "./authorName";
import {Link} from "react-router-dom";

function Posts(props) {
    const [posts, setPosts] = useState([]);

    const [token, setToken] = useState("");
    const [hasToken, setHasToken] = useState(false);

    // if user is logged in, show the create a post button
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setHasToken(true)
            setToken(localStorage.getItem("token"))
        }
    }, [token]);


    useEffect(() => {
        axios.get(BaseUrl + '/post/post_viewSet/')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);


    return (
        <div>
            {hasToken ? <Link to={"/createPost"} className={"btn btn-success"}>Create a post</Link>
                :
                " "}
            {posts.map(post =>
                <p>
                    <Link to={"/postDetail"} state={{post_id: post.id}} key={post.id}>{post.title}</Link>
                    -
                    <AuthorName authorID={post.author}/> -
                    {post.body}
                </p>)}
        </div>
    );
}

export default Posts;
