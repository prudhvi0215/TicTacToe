import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './Components/Homepage';
import Gamepage from './Components/Gamepage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/gamepage" component={Gamepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
