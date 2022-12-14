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

     const appsList = apps.map(app => {
        return <AppCard key={app.id}
        app={app}
        userInfo={userInfo}
        updateAppDetails={updateAppDetails}
        appDetails={appDetails}
        />
    })

     const nouns = ['creations', 'recommendations', 'iterations']
     let noun = nouns[Math.floor(Math.random()*nouns.length)];

    return(
        <Container textAlign="left"> 
        <Header as='h1' color='blue'><Icon name='check square'/>{adjective}...</Header>
        <h1>How about these {noun}?</h1>
        <Card.Group itemsPerRow={3}>
            {appsList}
        </Card.Group>
        {/* <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/>  */}
    </Container>
    )
}

export default AppsList;