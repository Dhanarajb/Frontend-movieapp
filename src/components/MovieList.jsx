import React from "react";
import { useState } from "react";
import Movie from "./subcomponent/Movie";

const MovieList = () => {

 const addMovie=()=>{

 }
  return (
    <div>
      {/* <button className="addbtn" onClick={addMovie}>Add New Movie</button> */}
      <form className="sort">
        <span>Sort By:</span>
        <select className="sort-list" >
          <option value="sort">Sort</option>
        
          <option value="year">Year</option>
        
          <option value="rating">Rating</option>
        </select>
      </form>

      <Movie />
    </div>
  );
};

export default MovieList;

//context: what we need to perform the context api
//usereducer:  how can we do perform that operation