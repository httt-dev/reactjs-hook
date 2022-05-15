import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Home />

      </header>
      <div className='content-right'>
        <AddNewProduct />
      </div>
    </div>
  );
}

export default App;
