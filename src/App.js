import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

/***** Pages *****/
import UnitedStatesMap from './pages/UnitedStatesMap/UnitedStatesMap';
import StateParks from './pages/StateParks/StateParks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={UnitedStatesMap} />
        <Route exact={true} path="/:stateName/:stateAbbr" component={StateParks} />
      </Switch>
    </Router>
  );
}

export default App;
