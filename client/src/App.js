import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from './component/Home';
import AppPage from './component/AppPage';
import AppsList from './component/AppsList';


function App() {
  const [user, setUser] = useState(false);
  
  const [store, setStore] = useState("");


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

        <Route  exact path="/fork">
          <AppPage/>
        </Route>

        <Route  exact path="/fork/apps">
          <AppsList store={store}/>
        </Route>

        <Route exact path="/home">
          <Home setStore={setStore}/>
        </Route>
        
    </Switch>
    </>
  );
}

export default App;
