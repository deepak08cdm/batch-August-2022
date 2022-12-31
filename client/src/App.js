import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Main';
import BasicCard from './Components/Card/Card';
import { useEffect, useState } from 'react';

const mockData = [
  {
    message:'welcome to react session',
    title:'React Hooks',
    body:'learn more about how to use react hooks',
  },
  {
    message:'welcome to react session',
    title:'React Hooks',
    body:'learn more about how to use react hooks',
  },
  {
    message:'welcome to react session',
    title:'React Hooks',
    body:'learn more about how to use react hooks',
  },
]
function App() {
  const [data, setData] = useState([])
  let text = 'wecome to myb class'
  const mockApi = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{return result.json()}).then((x)=>{setData(x)})
    // setTimeout(()=>{setData(mockData)},10000)
  }
  // mockApi()
  useEffect(()=>{
    mockApi()
    text='this has changed'
  },[])
  const receiver = (val)=>{
    console.log('app function',val)
  }
  return (
    <div className="App">
      <header className="App-header">
        {text}
        {/* {data.length == 0 && <button onClick={mockApi}>load ui</button>} */}
        {/* <Login val='hello' asd='byebye' qwe={callData}></Login> */}
        {/* <BasicCard data={data}/> */}
        {data.map((element,index)=>{
          return (
            <div style={{margin:'10px'}}>
              <BasicCard data={element} index={index+1} receiver={receiver}/>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;


// props are used to send data from parent to child and there is no direct process to send datd from child to parent
// to share data