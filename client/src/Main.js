import React, { useState } from 'react'

function Main(props) {
    console.log('inside main.js' , props)
    let [text, setText] = useState('hello')
    const arr = 1
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = (e)=>{
        e.stopPropagation()
        alert('click on button')
    }
    const handleClickDiv = ()=>{
        alert('click on div')
    }
  return (
    <>
        <div className='App' style={{backgroundColor:'red',display:'flex',flexDirection:'row'}}>
            <h1>
                {text}
            </h1>
        </div>
        <div onClick={handleClickDiv}>
            <input type='text' name='input' placeholder='enter some value here' value={text} onChange={handleChange}/>
            <button onClick={handleClick}>alert</button>
        </div>
    </>
  )
}

export default Main