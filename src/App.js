import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Draftfools. Coming Soon. From Endpoint LLC. Merging health care with sports gambling.
        </p>
        <a
          className="App-link"
          href="https://www.nhl.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Are you ready to lose serious money?
        </a>
      </header>
    </div>
  );
}

export default App;
