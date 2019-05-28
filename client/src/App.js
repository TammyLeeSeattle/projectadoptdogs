import React, { Component } from 'react';
import './App.css';

// STYLING COMPONENTS
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

// INDIVIDUAL REACT COMPONENTS
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/Notfound';
import Callback from './components/Callback';

// PAGE COMPONENTS
import UserSurvey from './pages/UserSurvey'

library.add(faExclamationCircle, faPaw);

class App extends Component {
	render() {
		let mainComp = '';
		console.log(this.props);
		console.log(window.location.pathname);
		switch (window.location.pathname) {
			case '/':
				mainComp = <Main {...this.props} />;
				break;
			case '':
				mainComp = <Main {...this.props} />;
				break;
			case '/callback':
				console.log('callback', this.props.location);
				mainComp = <Callback />;
				break;
			case '/profile':
				console.log('auth?', this.props.auth.isAuthenticated);
				mainComp = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound />;
				break;
			case '/usersurvey':
				console.log('User Survey page loaded!', this.props.location);
				mainComp = <UserSurvey />;
				break

			default:
				mainComp = <NotFound />;
		}
		return <div>{mainComp}</div>;
	}
}
export default App;
