// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'

// const AddProduct = () => {
//     const [title,setTitle]=useState('')
//     const [year,setYear]=useState('')
//     const [genres,setGenres]=useState('')
//     const [rating,setRating]=useState('')
//     const [url,setUrl]=useState('')

//     const navigate = useNavigate();
//     const addbtnn=()=>{
//         // navigate('/')
//         console.log(title,year,genres,rating,url)
//         const userID = JSON.parse(window.localStorage.getItem('user')) 
//         console.warn(userID)
//     }
//   return (
//     <div className='main-add'>
//         <h4>Add Movies</h4>
//         <input className='inp-add' value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Title...' required/>
//         <input className='inp-add' value={year} onChange={(e)=>setYear(e.target.value)} type="Number" placeholder='Year...' required/>
//         <input className='inp-add' value={genres} onChange={(e)=>setGenres(e.target.value)} type="text" placeholder='Genres...' required/>
//         <input className='inp-add' value={rating} onChange={(e)=>setRating(e.target.value)} type="Number" placeholder='ImdbRating...' required/>
//         <input className='inp-add' value={url} onChange={(e)=>setUrl(e.target.value)} type="text" placeholder='Posterurl...' required/>
//         <button className='btn-add' onClick={addbtnn} >Add Movie</button>
//     </div>
//   )
// }

// export default AddProduct