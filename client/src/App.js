import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/ReduxComp/Navbar';
import Details from './Pages/Details';
import Login from './Pages/Login';
import Home from './Pages/Home/Home'
import AddData from './Pages/AddData/AddData'
import { useEffect,useRef } from 'react';
import { Route,Routes, Redirect } from 'react-router-dom';

function App() {
  const inputRef = useRef(null)
  useEffect(()=>{
    console.log(inputRef.current)
  },[inputRef])
  return (
    <div className="App">
      <Navbar/>
      {/* <header className="App-header"> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/dashboard' element={<Details/>}/> */}
          {/* <Route path='/signUp' element={<Login/>}/> */}
          {/* <Route path='*' element={<Login/>}/> */}
          <Route path={`/home`} element={<Home/>} exact/>
          <Route path={`/add-data`} element={<AddData/>}exact/>
        </Routes>
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