import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect,
} from 'react-router-dom';
import AllCategories from './AllCategories';
import SingleCategory from './SingleCategory';
import SingleCreditCard from './SingleCreditCard';

const Routes = () => {
  // debugger;
  return (
    <Router>
      <div>
        {/* <nav>
          Welcome!
          <ul>
            <li>
              <NavLink to="/categories">Home</NavLink>
            </li>
          </ul>
        </nav> */}
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/categories" />
            </Route>
            <Route
              exact
              path="/categories/:categoryId"
              component={SingleCategory}
            />
            <Route exact path="/categories" component={AllCategories} />
            <Route
              exact
              path="/creditcards/:creditCardId"
              component={SingleCreditCard}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
