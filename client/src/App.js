import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/Notfound';
import Callback from './components/Callback';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import { faPaw} from '@fortawesome/free-solid-svg-icons';

library.add(faExclamationCircle,faPaw)

class App extends Component {
  render() {
    let mainComp = '';
    console.log(this.props)   
    console.log(window.location.pathname)
    switch(window.location.pathname){
      case '/':
        mainComp= <Main {...this.props}/>;
        break;
      case '':
        mainComp= <Main {...this.props}/>;
        break;
      case '/callback':
      console.log('callaback', this.props.location);
        mainComp = <Callback/>;
        break;
      case '/profile':
        console.log('auth?',this.props.auth.isAuthenticated )
        mainComp= this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound/>;
        break;
        
      default:
        mainComp= <NotFound />;
   };
  return (

    <div>
     
      {mainComp}

    </div>
  );
  }
};
export default App;