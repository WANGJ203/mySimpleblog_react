import React, {useEffect, useState} from 'react';
import Category from "../category/category";
import axios from "axios";
import {BaseUrl} from "../constants";
import login from "../login";

function CreatePost(props) {
    const [token, setToken] = useState("")
    const [hasToken, setHasToken] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            setHasToken(true);
        }
    }, [])

    function createPost() {
        let login_token = localStorage.getItem("token");

        let data = {
            title: document.getElementById("title").value,
            body: document.getElementById("body").value,
            category: document.getElementById("category").value
        };

        axios.post(BaseUrl + "post/post_viewSet/", data, {
            headers: {
                "Authorization": "Token " + login_token
            }
        }).then(response => {
            alert("Create successfully")
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <p>Title:<input type={"text"} id={"title"}/></p>
            <p>Body:<textarea id={"body"} rows={4} cols={40}></textarea></p>
            <p>Category:<select id={"category"}>
                <Category/>
            </select></p>
            <button onClick={createPost} className={"btn btn-success"}>Create</button>
        </div>
    );
}

export default CreatePost;
