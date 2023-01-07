import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar';
import Details from './Pages/Details';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Details/>
      </header>
    </div>
  );
}

export default App;


// props are used to send data from parent to child and there is no direct process to send datd from child to parent
// to share data