
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
import Nav from './components/Nav';
import Jumbotron from './components/UserInfo';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import { faPaw} from '@fortawesome/free-solid-svg-icons';

// PAGE COMPONENTS
import UserSurvey from './pages/UserSurvey'
import AboutUs from "./components/AboutUs";

// class App extends Component {
//   render() {
//     let mainComp = '';
//     console.log(this.props)   
//     console.log(window.location.pathname)
//     switch(window.location.pathname){
//       case '/':
//         mainComp= <Main {...this.props}/>;
//         break;
//       case '':
//         mainComp= <Main {...this.props}/>;
//         break;
//       case '/callback':
//       console.log('callaback', this.props.location);
//         mainComp = <Callback/>;
//         break;
//       case '/secret':
//       // console.log('secret', this.props.location);
//       //     mainComp = <Secret {...this.props}/>;
//         console.log('auth?',this.props.auth.isAuthenticated )
//         mainComp= this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound/>;
//         break;
        
//       default:
//         mainComp= <NotFound />;
//    };
//   return (
//     // <Router>
//     <div>
     
//       {mainComp}
//       {/* <Nav/> */}
//       {/* <Switch>
//          <Route exact path="/" component={Books} />
//          </Switch> */}

//       {/* // </Router>
//        */}
//       {/*      
//       <header className="App-header"> */}
//     </div>
//   );
//   }
// };
// export default App;


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
					break
				case '/about':
					mainComp = <AboutUs />
					break;
				default:
					mainComp = <NotFound />;
			}

			return mainComp;
		}
	  };

	render() {			
		
		console.log(this.props);
		console.log(window.location.pathname);
		
		return (
			<div>
				<div id='background' className='responsive-img'>
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

