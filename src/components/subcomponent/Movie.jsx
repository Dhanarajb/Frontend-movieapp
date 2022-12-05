import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
// import Genres from "../Genres";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useParams } from "react-router-dom";

export const MovieContext = createContext();

const Movie = () => {
  const params =useParams();
  let id = params.id;
  const [show, setShow] = useState([]);
  const [searchApi, setSearchApi] = useState([]);
  const [act, setAct] = useState([]);
  const [filterVal, setFilterVal] = useState("");

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState("");
  const [rating, setRating] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:5400/")
      .then((response) => response.json())
      .then((json) => {
        setShow(json);
        setSearchApi(json);
        setAct(json);
        console.log(json)
      });
  }, []);

  // delete
  // useEffect(() => {
  //   fetch(`http://localhost:5400/${id}`,{
  //     method:'DELETE'
  //   }).then(()=>setShow({
  //     status:'Deletedd'
  //   }))
      
  // }, []);
//   const del = (id) => {
//     fetch(`http://localhost:5400/${id}`, {
//         method: 'DELETE'
//     });

//     setShow(show.filter(p => p.id !== id));
//     console.log(id)

// }

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setShow(searchApi);
    } else {
      const filterResult = searchApi.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setShow(filterResult);
    }
    setFilterVal(e.target.value);
  };

  //genres

  const value = {
    show,
    // act,
    // setAct,
  };

  const searcHandle = (it) => {
    const result = act.filter((curr) => {
      return curr.genres === it;
    });
    setShow(result);
    console.log(result);
  };

  const addMovie = () => {
    setModal(!modal);
  };

  return (
    <MovieContext.Provider value={value}>
      <input
        className="input-head"
        type="search"
        name="search"
        id="search"
        value={filterVal}
        onInput={(e) => handleFilter(e)}
        placeholder=" 🔍 Searching..."
      />

      <div className="genre-main">
        {/* <Genres /> */}
        <h1 style={{ color: "white", fontSize: "25px", margin: "10px" }}>
          GENERES
        </h1>
        <hr />
        <div>
          <li className="All">All</li>
          <li onClick={() => searcHandle("Action")} className="lists-genere">
            Action
          </li>
          <li onClick={() => searcHandle("Adventure")} className="lists-genere">
            Adventure
          </li>
          <li onClick={() => searcHandle("Biography")} className="lists-genere">
            Biography
          </li>
          <li onClick={() => searcHandle("Comedy")} className="lists-genere">
            Comedy
          </li>
          <li onClick={() => searcHandle("Crime")} className="lists-genere">
            Crime
          </li>
          <li onClick={() => searcHandle("Drama")} className="lists-genere">
            Drama
          </li>
          <li onClick={() => searcHandle("History")} className="lists-genere">
            History
          </li>
          <li onClick={() => searcHandle("Scifi")} className="lists-genere">
            Scifi
          </li>
          <li onClick={() => searcHandle("Sport")} className="lists-genere">
            Sport
          </li>
          <li onClick={() => searcHandle("Twitter")} className="lists-genere">
            Twitter
          </li>
        </div>
      </div>

      {/* Edit */}
      {modal && (
        <div className="modal">
          <div onClick={addMovie} className="overlay"></div>
          <div className="modal-content">
            <div className="main-add">
              <h4>Add Movies</h4>
              <input
                className="inp-add"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title..."
                required
              />
              <input
                className="inp-add"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="Number"
                placeholder="Year..."
                required
              />
              <input
                className="inp-add"
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
                type="text"
                placeholder="Genres..."
                required
              />
              <input
                className="inp-add"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                type="Number"
                placeholder="ImdbRating..."
                required
              />
              <input
                className="inp-add"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="Posterurl..."
                required
              />
              <button className="btn-add" onClick={addMovie}>
                Add Movie
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="productsWrapper">
        {show.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.posterurl} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.imdbRating} </h5>
            <button onClick={addMovie} className="butun-left">
              <FiEdit />
            </button>
            {/* <button onClick={() => del(id)} className="butun">
              <MdDelete />
            </button> */}
          </div>
        ))}
      </div>
    </MovieContext.Provider>
  );
};

export default Movie;
