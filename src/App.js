import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
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
    </div>
  );
}

export default App;
