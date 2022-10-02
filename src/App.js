import logo from './logo.svg';
import './App.css';
import RefsWithClassComponent from "./component/RefsWithClassComponent";
import RefsWithFunctionalComponent from "./component/RefsWithFunctionalComponent";

function App() {
  return (
    <div className="App">
      {/*<RefsWithClassComponent />*/}
        <RefsWithFunctionalComponent />
    </div>
  );
}

export default App;
