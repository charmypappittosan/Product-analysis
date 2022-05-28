import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import DashBoard from './components/DashBoard/DashBoard';
import Blog from './components/Blog/Blog';
import Eror from './components/Eror/Eror';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/*" element={<Eror></Eror>}></Route>
      </Routes>
    </div>
  );
}

export default App;
