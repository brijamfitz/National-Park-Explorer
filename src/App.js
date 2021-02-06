import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/***** Pages *****/
import Home from './pages/Home/Home';
import States from './pages/States/States';
import StateParks from './pages/StateParks/StateParks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/states" component={States} />
        <Route exact={true} path="/states/:stateName/:abbreviation" component={StateParks} />
      </Switch>
    </Router>
  );
}

export default App;
