import './App.css';
import UseReducerHook from './hooks/UseReducerHook';
import UseStateHook from './hooks/UseStateHook'

function App() {
  return (
    <div className="App">

      <div className='use-state'>
        <UseStateHook />
      </div>

      <div className='use-reducer'>
        <UseReducerHook />
      </div>
      
    </div>
  );
}

export default App;
