import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Route component={App} />
	</Router>, document.getElementById('root')
);