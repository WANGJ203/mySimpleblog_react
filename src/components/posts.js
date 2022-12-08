import React, {useState, useEffect} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import AuthorName from "./authorName";
import {Link} from "react-router-dom";

function Posts(props) {
    const [posts, setPosts] = useState([]);

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
