
import './App.css';

import { Route, Switch } from 'react-router';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
 import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './JS/actions/user'; 

import PrivateRoute from './Components/router/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []); 
  return (
    <div className="App">
     <Switch>
       <Route exact path="/signin" component={Signin}/>
       <Route  path="/signup" component={Signup}/>
       <PrivateRoute   path="/dashboard" component={Dashboard}/>
       <PrivateRoute   path="/" />
       
  
     </Switch>
    </div>
  );
}

export default App;
