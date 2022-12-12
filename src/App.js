import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home";
import Category from "./components/category";
import NavBar from "./components/NavBar";
import Login from "./components/login";
import Posts from "./components/posts";
import PostDetail from "./components/postDetail";
import CreatePost from "./components/createPost";
import UpdatePost from "./components/updatePost";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="posts" element={<Posts/>}/>
                <Route path="category" element={<Category/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="postDetail" element={<PostDetail/>}/>
                <Route path="createPost" element={<CreatePost/>}/>
                <Route path="updatePost" element={<UpdatePost/>}/>
            </Routes>
        </div>
    );
}

export default App;
