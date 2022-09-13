import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from './component/Home';
import AppFilterPage from './component/AppFilterPage';
import AppsList from './component/AppsList';
import UserPage from './component/UserPage';
import ProgramPage from './component/ProgramPage';
import CommunityPage from './component/CommunityPage';


function App() {
  const [user, setUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [appDetails, SetAppDetails] = useState({})
  const [store, setStore] = useState(false)
  const [storeInfo, setStoreInfo] = useState("no store selected");
  // const [adjBoolean, setAdjBoolean] =useState(false)
  const [adjective, setAdjective] = useState("no adjective set")
  function updateUser(user) {
    setUserInfo(user)
    setUser(user)
  }

  function updateAppDetails(app) {
    SetAppDetails(app)
  }
  
  function updateStore(value) {
    setStoreInfo(value)
    setStore(true)
  }

  function updateAdjective(word) {
    setAdjective(word)
    // setAdjBoolean(true)
  }

  return (
  <>
    <Header>
        <NavBar user = {user} setUser = {setUser} userInfo={userInfo} setUserInfo={setUserInfo}/>
    </Header>
    <Switch>
        <Route  path="/signup">
          <Signup updateUser={updateUser}/>
        </Route>
        
        <Route exact path="/login">
          <Login updateUser={updateUser}/>
        </Route>

        <Route exact path="/community">
          <CommunityPage userInfo={userInfo} appDetails={appDetails} updateAppDetails={updateAppDetails}/>
        </Route>

        <Route  exact path="/users/:id">
          <UserPage updateUser={updateUser} userInfo={userInfo} updateAppDetails={updateAppDetails}/>
        </Route>

        <Route  exact path="/programs/:id">
          <ProgramPage appDetails={appDetails} userInfo={userInfo} updateAppDetails={updateAppDetails}/>
        </Route>

        <Route  exact path="/fork">
          <AppFilterPage adjective={adjective} updateAdjective={updateAdjective} updateStore={updateStore} store={store} storeInfo={storeInfo}/>
        </Route>

        <Route  exact path="/fork/apps">
          <AppsList storeInfo={storeInfo} userInfo={userInfo} updateAppDetails={updateAppDetails} appDetails={appDetails}/>
        </Route>

        <Route exact path="/home">
          <Home user={user} userInfo={userInfo}/>
        </Route>
        
    </Switch>
    </>
  );
}

export default App;
