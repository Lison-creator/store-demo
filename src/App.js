import logo from './logo.svg';
import './App.css';
import CounterDisplay from './containers/counter-display/counter-display';
import CounterAction from './containers/counter-action/counter-action';

function App() {
  return (
    <div className="App">
      <h1>Démo Redux</h1>
      <CounterDisplay />
      <CounterAction />
    </div>
  );
}

export default App;
