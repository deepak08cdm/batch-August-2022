import React, { useState } from 'react'
import Main from '../Main'

function Login(props) {
    console.log(props)
    const [details,setDetails] = useState({username:'',password:''})
    const handleUsername = (e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }
    const submitDetails = ()=>{
        console.log(details)
        props.qwe(details)
        //make post api send data ti back end and authentication
    }
  return (
    <div className='loginCard' onChange={handleUsername}>
        <input type='text' placeholder='Username' name='username' value={details.username}/>
        <br/>   
        <input type='password' placeholder='Password' name='password' value={details.password}/>
        <br/>
        <button className='btn btn-primary' onClick={submitDetails}>Login</button>
        {/* <Main val={props.val}></Main> */}
    </div>
  )
}

export default Login
// hooks - lifecycle method0