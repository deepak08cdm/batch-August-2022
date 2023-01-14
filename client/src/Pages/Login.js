import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Main from '../Main'

function Login(props,ref) {
    const inputRef = useRef(null)
    const [details,setDetails] = useState({username:'',password:''})
    const [authenticationFailed,setAuthenticationFailed] = useState(false)
    const navigate = useNavigate()
    const handleUsername = (e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }
    const submitDetails = async()=>{
        const result = await fetch('http://localhost:4200/users')
        const users = await result.json()
        const auth  = users.find((ele)=> ele.username===details.username && ele.password===details.password)
        if(auth){
          navigate('/dashboard')
          sessionStorage.setItem('authenticate',true)
        }
        else{
          sessionStorage.setItem('authenticate',false)
          setAuthenticationFailed(true)
        }
    }
    
    useEffect(()=>{
      console.log(inputRef.current)
    },[inputRef?.current?.value])
  return (
    <div className='loginCard' onChange={handleUsername} >
        <input type='text' id='user' placeholder='Username' name='username' value={details.username}/>
        <br/>   
        <input type='password' id="pass" placeholder='Password' name='password' value={details.password} />
        <br/>
        <button className='btn btn-primary' onClick={submitDetails}>Login</button>
        {
          authenticationFailed && 
          <div style={{color:'red'}}>check your username or password</div>
        }
    </div>
  )
}

export default React.forwardRef(Login)
