import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './component/homepage/Index';
import Search from './component/searchresult/Search';
import Recipe from './component/recipe/Recipe';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/search" render={(props) => <Search {...props} />} />
        <Route path="/recipe" render={(props) => <Recipe {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
