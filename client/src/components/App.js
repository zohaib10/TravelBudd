import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// route "/AddPlan"
import Header from './Header';
// "/"
// import Landing from './Landing';
// "/dashboard"
import Dashboard from './Dashboard';
// "/AddPlan"
import AddPlan from './AddPlan';

// exact={true} says to follow the path only if its an exact match
//How the components behaves depends on redux store
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/plan/add" component={AddPlan} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
