import React from "react";
import { HiEye } from "react-icons/hi";
import { SlScreenDesktop } from "react-icons/sl";
import { VscFolderOpened } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { GrAdd } from "react-icons/gr";
import "react-toastify/dist/ReactToastify.css";
// import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const [title,setTitle] = useState('')
  const [year,setYear] = useState('')
  const [genres,setGenres] = useState('')
  const [rating,setRating] = useState('')
  const [url,setUrl] = useState('')
  const navigate = useNavigate();

  const notifyy = () => toast("Logout will Successfull!");

  const handleLogout = () => {
    notifyy();
    navigate("/");
  };

  const addMovie = (e) => {
    setModal(!modal);
  //   setData({
  //     title: "",
  //     year: "",
  //     genres: "",
  //     rating: "",
  //     url: "",
  //   });
  //   if(data.title.length >1 && data.year.length > 1 && data.genres.length >1){
  //     setList([...list,
  //       {
  //         id:nextId++,
  //         title:data.title,
  //         year:data.year,
  //         genres:data.genres,
  //         rating:data.rating,
  //         url:data.url
  //       }

  //     ])
  //     alert('submitted')
  //   }else{
    
  //   }
  //   fetch("http://localhost:5400",{
  //     method:"POST",
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json',
  //     },
  //     body:JSON.stringify(data)
  //   }).then((result)=>{
  //     setData({
  //       title: "",
  //       year: "",
  //       genres: "",
  //       rating: "",
  //       url: "",
  //     });
  //   })
  //   e.preventDefault();
  };
  // console.log(addMovie())
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // function handleChange(e) {
  //   const item = e.target.value;
  //   setData({
  //     ...data,
  //     [e.target.name]: item,
  //   });
  // }

  //   const addbtnn=()=>{
  //     console.log(title,year,genres,rating,url)
  //     const userID = JSON.parse(window.localStorage.getItem('user'))
  //     console.warn(userID)
  // }
  return (
    <div className="sidebar-main">
      <h1 className="fixed-data sidebar-head">BM</h1>
      <ul className="fixed-data">
        <li>
          <HiEye />
        </li>
        <li>
          <SlScreenDesktop />
        </li>
        <li>
          <VscFolderOpened />
        </li>
        <li>
          <BsHeart />
        </li>
        <li>
          <button className="btn" onClick={addMovie}>
            <GrAdd />
          </button>
        </li>
      </ul>
      {modal && (
        <form onSubmit={addMovie}>
          <div className="modal">
            <div onClick={addMovie} className="overlay"></div>
            <div className="modal-content">
              <div className="main-add">
                <h4>Add Movies</h4>
                <input
                  className="inp-add"
                  name="title"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  type="text"
                  placeholder="Title..."
                  required
                />
                <input
                  className="inp-add"
                  name="year"
                  value={year}
                  onChange={(e)=>setYear(e.target.value)}
                  type="Number"
                  placeholder="Year..."
                  required
                />
                <input
                  className="inp-add"
                  name="genres"
                  value={genres}
                  onChange={(e)=>setGenres(e.target.value)}
                  type="text"
                  placeholder="Genres..."
                  required
                />
                <input
                  className="inp-add"
                  name="rating"
                  value={rating}
                  onChange={(e)=>setRating(e.target.value)}
                  type="Number"
                  placeholder="ImdbRating..."
                  required
                />
                <input
                  className="inp-add"
                  name="url"
                  value={url}
                  onChange={(e)=>setUrl(e.target.value)}
                  type="text"
                  placeholder="Posterurl..."
                  required
                />
                <button type="submit" className="btn-add" >
                  Add Movie
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <li className="logout" onClick={handleLogout}>
        {" "}
        <GrLogout />
      </li>
    </div>
  );
};

export default Sidebar;
