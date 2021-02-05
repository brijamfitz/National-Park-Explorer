import './App.css';
import Home from './pages/Home/Home';
import Parks from './pages/Parks/Parks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/parks" component={Parks} />
      </Switch>
    </Router>
  );
}

export default App;
