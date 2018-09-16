import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import QueryDemo from './pages/Query';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={QueryDemo} />
    </div>
  </Router>
);
export default App;
