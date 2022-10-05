import './App.css';
import UseStateHooks from "./component/UseStateHooks";
import UseStateWithObjects from "./component/UseStateWithObjects";
import UseEffectApiHit from "./component/useEffect/UseEffectApiHit";
import UseEffectResizing from "./component/useEffect/UseEffectResizing";
import ComplexFunctionProblem from "./component/useMemo/ComplexFunctionProblem";
import UseMemoFixComplexProblem from "./component/useMemo/UseMemoFixComplexProblem";
import ComponentRenderCount from "./component/useRef/ComponentRenderCount";
import InputValueByRef from "./component/useRef/InputValueByRef";

function App() {
    return (
        <div className="App">
            <h1>Use Ref render component & focus input</h1>
            <ComponentRenderCount />
            <InputValueByRef />
            <hr/>

            <h1>Use state hooks</h1>
            <UseStateHooks/>
            <UseStateWithObjects/>
            <hr/>

            <h1>Use Effect</h1>
            <UseEffectApiHit/>
            <UseEffectResizing/>
            <hr/>

            <h1>Problem without memo</h1>
            <ComplexFunctionProblem/>

            <hr/>
            <h1>Fix problem with memo</h1>
            <UseMemoFixComplexProblem/>
        </div>
    );
}

export default App;
