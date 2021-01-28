import React from 'react';
import ReactDOM from 'react-dom';
// We're using React Router DOM to manage routing in our app, see:
// https://reactrouter.com/web/guides/quick-start
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// We need to include the Bootstrap CSS, see:
// https://react-bootstrap.github.io/getting-started/introduction/#css
import 'bootstrap/dist/css/bootstrap.min.css';

// We render our <App> the usual way, but wrap it in
// a <BrowserRouter>, so the rendering of routed components
// will get managed for us, based on the URL.
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
