import './App.css';
import CounterContainer from './Components/CounterContainer';

function App() {
  return (
    <>
      {/* <div className="mainContainer">
        <div className="container">
          <h1 >Counter App</h1>
          <div className="CounterNumberContainer">
            <h2>0</h2>
          </div>
          <div className="buttonsContainer">
            <button id='incrementButton'>Increment</button>
            <button id='decrementButton'>Decrement</button>
          </div>
        </div>
      </div> */}
      <CounterContainer />
    </ >
  );
}

export default App;
