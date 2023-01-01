import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Main';
import BasicCard from './Components/Card/Card';
import { useEffect, useState } from 'react';
import Dialog from './Components/Dialog/Dialog'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
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
  const [openDialog, setOpenDialog] = useState(false)
  const [comments, setComments] = useState([])
  const [loader, setLoader] = useState(false)
  const [postId,setPostId] = useState(null)
  

  const mockApi = async()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    const x = await result.json()
    setData(x)
  }

  useEffect(()=>{
    mockApi()
  },[]) // componentDidMount

  useEffect(()=>{
    // alert('componentDidUpdate universal')
  }) // componentDidUpdate Universal
  useEffect(()=>{
  //  alert('compoenentDidUpdated on comments') 
  if(comments.length>0){
    setLoader(false)
    setOpenDialog(true)
  }
  },[comments])
  // useEffect(()=>{
  //   callCommments(postId)
  // },[postId])

  const callCommments = async(id)=>{
    const result = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const x = await result.json()
    setComments(x)
  }
  const receiver = (val)=>{
    setTimeout(()=>{callCommments(val)},2000)
    // setPostId(val)
    setLoader(true)
    // setOpenDialog(true)
  }
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleCloseLoader = ()=>{
    setLoader(false)
  }
  return (
    <div className="App">
      <header className="App-header">
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
        <Dialog open={openDialog} handleClose={handleClose} data={comments}/>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
        onClick={handleCloseLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </header>
    </div>
  );
}

export default App;


// props are used to send data from parent to child and there is no direct process to send datd from child to parent
// to share data