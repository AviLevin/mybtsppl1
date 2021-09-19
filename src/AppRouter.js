import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import EmployeesHK from "./components/EmployeesHK/EmployeesHK";
import { AppProvider } from "./AppContext";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (

    <AppProvider>
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
 </AppProvider>

  );
}

export default App;
