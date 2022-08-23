import React, { useEffect } from "react";
import { Menu, Header, Button }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function NavBar({user, setUser}) {
    const history = useHistory();
  
    function onLogout(e){
       e.preventDefault()
       fetch('/logout', {
          method: 'DELETE',
       })
       .then(response => {
          if(response.ok){
            setUser(false)
            response.json().then(() => {
              history.push("/signup")
          }
        )}})
    }

    console.log(user)

    return (
        <div>
            <h1>Navigation:</h1>
            <a>Registration or Authentication </a>
            <a>Information / Preparation</a>
            <a>Convseration / Cooperartion / Collaboration</a>
            <a>Invitation / Participation</a>
            <a>Celebration / Admiration / APPreciation / Ovation / Jubilation / Commemoration</a>
            <a>Complication?</a>
        </div>
    )
}