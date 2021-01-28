// We need the Switch and Route components from React Router DOM
// in order to define our app's main component "pages" and paths.
import { Switch, Route } from 'react-router-dom';

// Each "page" in our app is a React Component
import About from './About';
import Home from './Home';
import Repos from './Repos';
import User from './User';

function App() {
  // The Switch will determine which of the following Routes
  // to show at runtime.  There will always be 1 visible.
  // The URL will be used to match against the paths.
  // Notice that some include :params, which can vary.
  return (
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>

      <Route path="/users/:username/repos">
        <Repos />
      </Route>

      <Route path="/users/:username">
        <User />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
