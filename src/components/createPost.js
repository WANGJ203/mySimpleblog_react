import React from 'react';

function CreatePost(props) {
    return (
        <div>
            <p>Title:<input type={"text"} id={"title"}/> </p>
            <p>Body:<textarea id={"body"} rows={10} cols={40}></textarea></p>
            <p>Category:<select id={"category"}></select></p>
        </div>
    );
}

export default CreatePost;
