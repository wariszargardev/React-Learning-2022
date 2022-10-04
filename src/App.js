import './App.css';
import UseStateHooks from "./component/UseStateHooks";
import UseStateWithObjects from "./component/UseStateWithObjects";
import UseEffectApiHit from "./component/useEffect/UseEffectApiHit";
import UseEffectResizing from "./component/useEffect/UseEffectResizing";

function App() {
    return (
        <div className="App">
            <UseStateHooks/>
            <UseStateWithObjects/>
            <h1>Use Effect</h1>
            <UseEffectApiHit />
            <UseEffectResizing />
        </div>
    );
}

export default App;
