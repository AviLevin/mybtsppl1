import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import EmployeesHK from "./components/EmployeesHK/EmployeesHK";

import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <EmployeesHK />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
