import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Main';

function App() {
  const callData = (v)=>{
    console.log('inside app.js component',v)
    alert('calldata function triggred')
  }
  return (
    <div className="App">
      <header className="App-header">
        <Login val='hello' asd='byebye' qwe={callData}></Login>
      </header>
    </div>
  );
}

export default App;


// props are used to send data from parent to child and there is no direct process to send datd from child to parent
// to share data