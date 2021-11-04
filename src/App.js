import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
const happy = <h2>Sono felice</h2>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test titolo</h1>
        <img src={logo} className="App-logo" alt="logo" />
          <Clock show country="ITALIA" timezone="1" />

        {happy}
      </header>
    </div>
  );
}

export default App;
