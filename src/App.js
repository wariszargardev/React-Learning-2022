import './App.css';
import JSXSyntax from "./Component/JSXSyntax";
import ComponentsAndProps from "./Component/ComponentsAndProps";
import HandlingEvent from "./Component/HandlingEvent";
import ConditionalReRendring from "./Component/ConditionalReRendring";
import ListingAndKeys from "./Component/ListingAndKeys";
import ControlledComponents from "./Component/form/ControlledComponents";
import ControlledComponentSetMultipleValue from "./Component/form/ControlledComponentSetMultipleValue";
import SingleInputForm from "./Component/form/funcrional component/SingleInputForm";
import MultipleInputForm from "./Component/form/funcrional component/MultipleInputForm";
import Sidebar from "./Component/composition/Sidebar";
import Content from "./Component/composition/Content";

function App() {
    return (
        <>
            <JSXSyntax/>
            <ComponentsAndProps name={"Waris"} email={"wariszargardev@gmail.com"}/>
            <ComponentsAndProps name={"Ali"} email={"alizargardev@gmail.com"}/>
            <HandlingEvent/>

            <h1 style={{textAlign: "center"}}>Conditional Rendering</h1>

            <ConditionalReRendring/>
            <ConditionalReRendring isLoggedIn={true}/>

            <h1 style={{textAlign: "center"}}>Listing & Keys</h1>

            <ListingAndKeys/>

            <h1 style={{textAlign: "center"}}>Form handling with class component (Single/Multiple) fields</h1>

            <ControlledComponents/>

            <ControlledComponentSetMultipleValue/>

            <h1 style={{textAlign: "center"}}>Form handling with functional component (Single/Multiple) fields</h1>
            <SingleInputForm/>
            <MultipleInputForm/>


            <h1 style={{textAlign: "center"}}>Composition</h1>


                <Sidebar>
                        <Content />
                        <Content />
                        <Content />
                        <Content />
                </Sidebar>
        </>
    );
}

export default App;
