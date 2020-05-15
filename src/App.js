import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPg from './components/LoginPg'
import RegistrationPg from './components/RegistrationPg';


function App() {
  return (
    <Router>
      <div>
        <Route exact path= "/" component= {RegistrationPg}/>
        <Route path= "/loginPg" component= {LoginPg}/>
        <Route path= "/registrationPg" component= {RegistrationPg}/>
      </div>
    </Router>
  );
}

export default App;
