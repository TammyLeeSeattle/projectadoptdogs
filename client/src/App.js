
import React, { Component } from 'react';
import './App.css';

// STYLING COMPONENTS
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// import { faPaw } from '@fortawesome/free-solid-svg-icons';

// INDIVIDUAL REACT COMPONENTS
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/Notfound';
import Auth from './Auth';
import Callback from './components/Callback';
import QueryString from 'query-string'
// PAGE COMPONENTS
import UserSurvey from './pages/userSurvey'
import DogList from './pages/DogList';
import Nav from './components/Nav';
import Jumbotron from './components/UserInfo';
import AboutUs from "./components/AboutUs";
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import { faPaw} from '@fortawesome/free-solid-svg-icons';

library.add(faExclamationCircle, faPaw);

class App extends Component {
	state = {
		currentPage: 'Home'
	  };
	
	  handlePageChange = page => {
		this.setState({currentPage:page});
	  };
	
	  renderPage = ()=> {
		if(this.state.currentPage === 'about'){
		  return <AboutUs/>
		} else {
			let mainComp = '';
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
					break;
				case '/doglist':
					
					const values = QueryString.parse(window.location.search);
					console.log(values);

					mainComp = <DogList chosenBreeds={values.chosenBreeds}/>;
				break;
				case '/about':
					mainComp = <AboutUs />
					break;
				default:
					mainComp = <NotFound />;
			}

			return mainComp;
		}
	  };

	  showBackgroundImage = () => {
		 // return window.location.pathname === '/' || window.location.pathname == '';
		 return true;
	  }

	render() {					
		console.log(this.props);
		console.log(window.location.pathname);		
		return (
			<div>
				<div id='background' className={'responsive-img' + (this.showBackgroundImage() ? ' background-image' : '')}>
          			<div className="container-fluid">           
						<Nav {...this.props}
            				currentPage={this.state.currentPage}
            				handlePageChange={this.state.handlePageChange}
              			/>
						{this.renderPage()}
					</div>
      			</div>
			</div>
		);
	}
}
export default App;

