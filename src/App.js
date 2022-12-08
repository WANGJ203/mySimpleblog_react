import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home";
import Category from "./components/category";
import NavBar from "./components/NavBar";
import Login from "./components/login";
import Posts from "./components/posts";
import PostDetail from "./components/postDetail";




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
            </Routes>
        </div>
    );
}

export default App;
