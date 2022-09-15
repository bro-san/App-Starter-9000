import React from "react";
import AppCard from "./AppCard";
import { Container, Card, Header, Icon } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import config from "../config";

function AppsList({storeInfo, userInfo, updateAppDetails, appDetails, adjective}){

    const secretkey = config.SECRET_API_KEY;

    const [apps, setApps] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': secretkey,
            'X-RapidAPI-Host': 'app-stores.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(`https://app-stores.p.rapidapi.com/search?store=${storeInfo}&term=${adjective}&language=en`, options)
        .then(response => response.json())
        .then(response => setApps(response))
        .catch(err => console.error(err));
    }, [adjective, storeInfo])

     console.log("These apps have been fetched:", apps)

     function setAppsList(apps) {
        let appsListConditional
        if (apps.length != 0) {
            appsListConditional = apps.map(app => {
                return <AppCard key={app.id}
                app={app}
                userInfo={userInfo}
                updateAppDetails={updateAppDetails}
                appDetails={appDetails}
                />
          })
        } else {
            appsListConditional = "Sorry, that term doesn't have any hits..."
        }
        return(appsListConditional)
    }

     const nouns = ['creations', 'recommendations', 'iterations']
     let noun = nouns[Math.floor(Math.random()*nouns.length)];

    return(
        <Container textAlign="left"> 
        <Header as='h1' color='blue'><Icon name='check square'/>{adjective}...</Header>
        <h1>How about these {noun}?</h1>
        <Card.Group itemsPerRow={3}>
            {setAppsList(apps)}
        </Card.Group>
    </Container>
    )
}

export default AppsList;