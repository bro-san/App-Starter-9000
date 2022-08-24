import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from './component/Home';
import Apple from './component/Apple';
import AppleApps from './component/AppleApps';
import Andriod from './component/Android';
import AndriodApps from './component/AndriodApps';


function App() {
  const [user, setUser] = useState(false);
  
  return (
  <>
    <Header>
        <NavBar user = {user} setUser = {setUser}/>
    </Header>
    <Switch>
        <Route  path="/signup">
          <Signup />
        </Route>
        
        <Route exact path="/login">
          <Login setUser = {setUser}/>
        </Route>

        <Route  exact path="/apple">
          <Apple />
        </Route>

        <Route  exact path="/apple/apps">
          <AppleApps/>
        </Route>

        <Route  exact path="/andriod">
          <Andriod />
        </Route>

        <Route  exact path="/andriod/apps">
          <AndriodApps/>
        </Route>

        <Route exact path="/welcome">
          <Home />
        </Route>
        
    </Switch>
    </>
  );
}

export default App;
