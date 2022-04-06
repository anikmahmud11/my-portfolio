import './App.css';
import Navigation from './Pages/Shared/Nav/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './Pages/ProjectDetails/Details';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';




function App() {
  return (
    <div className="custom">
      <Router>
      <Navigation></Navigation>
        <Switch>
          
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/details/:projectId">
          <Details></Details>
          </Route>
          <Route path="*">
        <Notfound></Notfound>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
