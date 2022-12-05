import React from "react";
// import Genres from "../components/Genres";
import MovieList from "../components/MovieList";
import Sidebar from "../components/Sidebar";

const Home = () => {
  
  return (
    <div className="main-body">
      <div className="set-input">
        <Sidebar />
        

      </div>
      <div className="list">
        {/* <Genres /> */}
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
