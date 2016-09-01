import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import Todos from '../components/Todos/Todos.jsx';
import UsersIndex from '../components/users/UsersIndex.jsx';
import NotFound from '../components/NotFound';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} >
    	<IndexRoute component={Todos}/>
    	<Route path="/users" component={UsersIndex}/>
	    <Route path="/actived" component={Todos} />
	    <Route path="/completed" component={Todos} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
