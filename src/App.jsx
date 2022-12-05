import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MyMoviePage from "./Pages/MyMoviePage";
import Users from "./Pages/Users";
import MovieDashBoard from "./Pages/MovieDashBoard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/moviepage" element={<MyMoviePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dashboard" element={<MovieDashBoard />} />
          <Route path="/add-movie" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
