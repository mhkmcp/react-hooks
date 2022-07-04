import './App.css';
import UseEffectHook from './hooks/UseEffectHook';
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

      <div className='use-effect'>
        <UseEffectHook />
      </div>
      
    </div>
  );
}

export default App;
