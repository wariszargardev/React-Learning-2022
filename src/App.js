import logo from './logo.svg';
import './App.css';
import UserState from "./Context/userState";
import UserInfo from "./Component/User/UserInfo";
import Courses from "./Component/Course/Courses";

function App() {
  return (
      <UserState>
          <UserInfo />
          <Courses />
      </UserState>
  );
}

export default App;
