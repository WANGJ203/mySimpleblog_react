import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";

function AuthorName(props) {
     const [name,setName]=useState("");

     useEffect(() => {
         axios.get(BaseUrl+"post/users/"+props.authorID)
             .then(response =>{
                 setName(response.data.username);
             }).catch(error => {
                 console.log(error)
         })
     },[name]);

    return (
       <fragment>{name}</fragment>
    );
}

export default AuthorName;
