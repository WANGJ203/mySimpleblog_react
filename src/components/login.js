import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import { useNavigate } from "react-router-dom";



function Login(props) {
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasToken, setHasToken] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setHasToken(true)
            setToken(localStorage.getItem("token"))
        }
    },[token]);

    function usernameHandler(event) {
        setUsername(event.target.value)
    }

    function passwordHandler(event) {
        setPassword(event.target.value)
    }

    function login() {
        axios.post(
            BaseUrl + 'auth/',
            {
                username: username,
                password: password,
            },
            {
                headers: {},
            }
        ).then(response =>{
            console.log(response.data);
            setToken(response.data);
            setHasToken(true);
            localStorage.setItem('token', response.data.token);
            navigate("/home");//go to home page
            window.location.reload(false); //refresh page
        }).catch(error => {
            console.log(error)
        });

    }

    function logout() {
       let login_token = localStorage.getItem('token');
       axios.get(
            BaseUrl + 'auth/logout/',
            {
                headers: {
                'Authorization':'Token '+login_token,
                }
            }
        ).then(response =>{
            console.log(response);
            localStorage.removeItem("token");
            setToken("");
            setHasToken(false);
//            navigate("/");//go to home pageÒ
            window.location.reload(false); //refresh page

        })
          .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            {/*{hasToken?... : ...}*/}
            {/*if has token, means already login, then appear the logout button, else show the login form*/}
            {hasToken?
                <Fragment>
                    <button className={"btn btn-primary"} onClick={logout}>Logout</button>
                </Fragment>
                :
                <Fragment>
                <p>Username:<input className={"form-control"} name={"username"} onChange={usernameHandler}/></p>
                <p>Password:<input className={"form-control"} name={"password"} onChange={passwordHandler}/></p>
                <p>
                    <button onClick={login}>Login</button>
                </p>
                </Fragment>
            }
        </div>
    );
}

export default Login;
