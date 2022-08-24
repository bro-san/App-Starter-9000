import React from "react";
import AppCard from "./AppCard";
import { Container, Card } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import config from "../config";
function AppsList({store}){

    const secretkey = config.SECRET_API_KEY;

    const [apps, setApps] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': {secretkey},
            'X-RapidAPI-Host': 'app-stores.p.rapidapi.com'
        }
    };
    
    const terms = ['cool', 'dumb', 'pretty', 'fast', 'popular', 'trendy', 'sophisticated', 'advanced', 'hacks', 'steamy', 'old', 'vague']
    let term = terms[Math.floor(Math.random()*terms.length)];


    useEffect(() => {
        fetch(`https://app-stores.p.rapidapi.com/search?store=${store}&term=${term}&language=en`, options)
        .then(response => response.json())
        .then(response => setApps(response))
        .catch(err => console.error(err));
    }, [])

     console.log(apps)

     const appsList = apps.map(app => {
        return <AppCard key={app.id}
        id={app.id}
        link={app.url}
        name={app.name}
        category={app.category}
        ratings={app.ratings}
        description={app.description}
        icons={app.icons}
        screenshots={app.screenshots}
        // handleDelete={handleDelete}
        />
    })

     const nouns = ['creations', 'recommendations', 'iterations']
     let noun = nouns[Math.floor(Math.random()*nouns.length)];

    return(
        <Container textAlign="left"> 
        <h1>How about these {noun}?</h1>
        <Card.Group itemsPerRow={1}>
            {appsList}
        </Card.Group>
    </Container>
    )
}

export default AppsList;