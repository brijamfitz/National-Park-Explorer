import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/***** Pages *****/
import Home from './pages/Home/Home';
import States from './pages/States/States';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/states" component={States} />
      </Switch>
    </Router>
  );
}

export default App;
