import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/ReduxComp/Navbar';
import Details from './Pages/Details';
import Login from './Pages/Login';
import Home from './Pages/Home/Home'
import AddData from './Pages/AddData/AddData'
import { useEffect,useRef } from 'react';
import { Route,Routes, Redirect } from 'react-router-dom';
import MainProvider from './Providers/MainProvider';
import axios from 'axios'
import Books from './Assest/images/books.jpeg'

async function api(){
  try{
    const r = await axios.post('http://localhost:3200/data',{
      user:'df8d1a8a',
      password:'asdfer'
  })
    console.log(r)
  }
  catch(err){
    console.log(err)
  }
}
function App() {
  useEffect(()=>{
    api()
  },[]) // componentDidMount 
  return (
    <div className="App">
      <Navbar/>
      {/* <header className="App-header"> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/dashboard' element={<Details/>}/> */}
          {/* <Route path='/signUp' element={<Login/>}/> */}
          {/* <Route path='*' element={<Login/>}/> */}
          <Route path={`/home`} element={<MainProvider><Home/></MainProvider>} exact/>
          <Route path={`/add-data`} element={<AddData/>}exact/>
        </Routes>
        <img src='https://randomuser.me/api/portraits/men/75.jpg'/>
      {/* </header> */}
    </div>
  );
}

export default App;

/**
 * componentDidMount   useEffect(()=>{},[])
 * componentDidUpdate  useEffect(()=>{}) on all state changed  / useEffect(()=>{},[array of state]) on particular state change
 */

// props are used to send data from parent to child and there is no direct process to send datd from child to parent
// to share data