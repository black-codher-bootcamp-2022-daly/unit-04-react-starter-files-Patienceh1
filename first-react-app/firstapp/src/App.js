import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';

function Header () {
  return <h1>Hey Patience</h1>
}

function Footer ({nickname}) {
  return (
    <div>
      <h1>Goodbye {nickname}</h1>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer nickname="Patience" />
    </div>
  );
}

export default App;
