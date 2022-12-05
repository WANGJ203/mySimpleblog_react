import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home";
import Category from "./components/category";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
        <NavBar/>
     <Routes>
        <Route path="home" element={ <Home/> } />
        <Route path="category" element={ <Category/> } />
      </Routes>
    </div>
  );
}

export default App;
