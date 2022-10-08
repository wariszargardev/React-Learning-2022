import './App.css';
import UseStateHooks from "./component/UseStateHooks";
import UseStateWithObjects from "./component/UseStateWithObjects";
import UseEffectApiHit from "./component/useEffect/UseEffectApiHit";
import UseEffectResizing from "./component/useEffect/UseEffectResizing";
import ComplexFunctionProblem from "./component/useMemo/ComplexFunctionProblem";
import UseMemoFixComplexProblem from "./component/useMemo/UseMemoFixComplexProblem";
import ComponentRenderCount from "./component/useRef/ComponentRenderCount";
import InputValueByRef from "./component/useRef/InputValueByRef";
import UserProvider from "./component/useContext/context/UserProvider";
import User from "./component/useContext/User";
import UseCallBackProblem from "./component/useCallback/problem/UseCallBackProblem";
import UseCallBackProblemSolve from "./component/useCallback/solve/UseCallBackProblemSolve";
import UserLists from "./component/UserLists";
import UserProfile from "./component/UserProfile";

function App() {
    return (
        <div className="App">

            <h1>Custom hooks</h1>
            <UserProfile />
            <UserLists />
            <hr />


            {/*<h1>Use callback problem</h1>*/}
            {/*<UseCallBackProblem />*/}

            {/*<h1>Use callback problem solve</h1>*/}
            {/*<UseCallBackProblemSolve />*/}

            {/*<hr />*/}
            {/*<h1>Context API</h1>*/}
            {/*<UserProvider>*/}
            {/* <User />*/}
            {/*</UserProvider>*/}
            {/*<hr/>*/}

            {/*<h1>Use Ref render component & focus input</h1>*/}
            {/*<ComponentRenderCount/>*/}
            {/*<InputValueByRef/>*/}
            {/*<hr/>*/}

            {/*<h1>Use state hooks</h1>*/}
            {/*<UseStateHooks/>*/}
            {/*<UseStateWithObjects/>*/}
            {/*<hr/>*/}

            {/*<h1>Use Effect</h1>*/}
            {/*<UseEffectApiHit/>*/}
            {/*<UseEffectResizing/>*/}
            {/*<hr/>*/}

            {/*<h1>Problem without memo</h1>*/}
            {/*<ComplexFunctionProblem/>*/}

            {/*<hr/>*/}
            {/*<h1>Fix problem with memo</h1>*/}
            {/*<UseMemoFixComplexProblem/>*/}
        </div>
    );
}

export default App;
