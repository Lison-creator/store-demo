import logo from './logo.svg';
import './App.css';
import CounterDisplay from './containers/counter-display/counter-display';

function App() {
  return (
    <div className="App">
      <h1>Démo Redux</h1>
      <CounterDisplay />
    </div>
  );
}

export default App;
