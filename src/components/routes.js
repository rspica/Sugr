import React from 'react'
import Dashboard from '../dashboard'
import App from '../App'
import { Router, Route, browserHistory} from 'react-router'

const Routes = () => (
	//Setting up routes
		<Router history={browserHistory}>
			<Route path="/" component={App}></Route>
			<Route path="/dashboard" component={Dashboard}></Route>
		</Router>
)

export default Routes;