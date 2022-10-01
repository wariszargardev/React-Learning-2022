import './App.css';
import StudentListings from "./Component/StudentListings";
import AccessibleForms from "./Component/AccessibleForms";
import ProgrammaticallyManagingFocus from "./Component/ProgrammaticallyManagingFocus";
import UseRefFunctionalComponent from "./Component/UseRefFunctionalComponent";

function App() {
    return (
        <div className="App">
            <StudentListings/>

            <AccessibleForms/>
            <h1 style={{textAlign: "center"}}>User Ref Class Component</h1>
            <ProgrammaticallyManagingFocus/>
            <h1 style={{textAlign: "center"}}>User Ref Functional Component</h1>
            <UseRefFunctionalComponent />
        </div>
    );
}

export default App;
