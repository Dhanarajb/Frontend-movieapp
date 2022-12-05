import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const addSign=()=>{
        console.log(name,email,password)
        navigate('/')
    }
  return (
    <div>
      <header className="header">Movie App</header>
      <div className='main-add'>
        <h4>Add Movies</h4>
        <input className='inp-add' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Title...' required/>
        <input className='inp-add' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email...' required/>
        <input className='inp-add' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password...' required/>
        <button className='btn-add' onClick={addSign} >Sign Up</button>
    </div>
    </div>
  )
}

export default SignUp