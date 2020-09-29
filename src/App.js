import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './component/homepage/Index';
import Search from './component/searchresult/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/search" render={(props) => <Search {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
