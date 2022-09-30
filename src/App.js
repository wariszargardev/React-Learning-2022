import './App.css';
import JSXSyntax from "./Component/JSXSyntax";
import ComponentsAndProps from "./Component/ComponentsAndProps";
import HandlingEvent from "./Component/HandlingEvent";
import ConditionalReRendring from "./Component/ConditionalReRendring";

function App() {
    return (
        <>
            <JSXSyntax/>
            <ComponentsAndProps name={"Waris"} email={"wariszargardev@gmail.com"}/>
            <ComponentsAndProps name={"Ali"} email={"alizargardev@gmail.com"}/>
            <HandlingEvent />

            <h1 style={{textAlign: "center"}}>Conditional Rendering</h1>

            <ConditionalReRendring />
            <ConditionalReRendring isLoggedIn={true} />
        </>
    );
}

export default App;
