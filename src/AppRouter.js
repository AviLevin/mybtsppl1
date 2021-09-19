import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import EmployeesHK from "./components/EmployeesHK/EmployeesHK";
import { AppProvider } from "./AppContext";
import About from "./components/About/About";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UserListsFavorite from "./components/EmployeesHK/UserListFavorite";


function App() {
  return (

    <AppProvider>
    <div>
      
        <Router>
          <NavBar />

          <Switch>
            <Route exact path="/" component={EmployeesHK} />
            <Route exact path="/favorite" component={UserListsFavorite} />
          </Switch>
        </Router>
     
    </div>
 </AppProvider>

  );
}

export default App;
