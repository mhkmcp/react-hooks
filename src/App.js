import './App.css';
import UseEffectHook from './hooks/UseEffectHook';
import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseReducerHook from './hooks/UseReducerHook';
import UseRefHook from './hooks/UseRefHook';
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

      <div className='use-ref'>
        <UseRefHook />
      </div>

      <div className='use-layout-effect'>
        <UseLayoutEffect />
      </div>
      
    </div>
  );
}

export default App;
