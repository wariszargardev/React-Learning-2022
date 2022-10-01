import './App.css';
import UserProfile from "./Component/UserProfile";
import ErrorBoundary from "./Boundry/ErrorBoundary";

function App() {
    return (
        <div className="App">
            {/* Seprately define routes */}
            <ErrorBoundary>
                <UserProfile name={"Waris"}/>
            </ErrorBoundary>

            <ErrorBoundary>
                <UserProfile name={"Awais"}/>
                <UserProfile name={"Ali"}/>
                <UserProfile name={"Ahsan"}/>
            </ErrorBoundary>


        </div>
    );
}

export default App;
