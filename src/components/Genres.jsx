// import React from 'react'
// import { useState } from 'react'
// import { useContext } from 'react'
// import { MovieContext } from './subcomponent/Movie'

// const Genres = () => {
//   const { show} =useContext(MovieContext)
//   const [act , setAct] =useState([])
  
//   // console.log("yes",show)
//   const handleAct=()=>{
//     const actions = show.filter(ac=>ac.Genres === "Action").map(aci=>aci)
//     setAct(actions)
//     console.log(actions)
//   }
//   return (
//     <div >
//       <h1 style={{color:'white', fontSize:"25px",margin:"10px"}}>GENERES</h1>
//       <hr/>
//        <div>
//         <li className='All'>All</li>
//         <li onClick={handleAct} className='lists-genere'>Action</li>
//       <li className='lists-genere'>Adventure</li>
//       <li className='lists-genere'>Biography</li>
//       <li className='lists-genere'>Comedy</li>
//       <li className='lists-genere'>Crime</li>
//       <li className='lists-genere'>Drama</li>
//       <li className='lists-genere'>History</li>
//       <li className='lists-genere'>Scifi</li>
//       <li className='lists-genere'>Sport</li>
//       <li className='lists-genere'>Twitter</li>
//       </div> 
//     </div>
//   )
// }

// export default Genres
