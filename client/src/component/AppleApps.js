import React from "react";
import AppleAppCard from "./AppleAppCard";
import { Container, Card } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function AppleApps(){
    
    const [appleApps, setAppleApps] = useState([])

    const appleAppsList = appleApps.map(app => {
        return <AppleAppCard key={app.id}
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
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '273a166339mshd767c60ebd4c95cp1aea2cjsn3f5b1c4f3066',
            'X-RapidAPI-Host': 'app-stores.p.rapidapi.com'
        }
    };
    
    const terms = ['cool', 'dumb', 'pretty', 'fast', 'popular', 'trendy', 'sophisticated', 'advanced', 'hacks']
    let term = terms[Math.floor(Math.random()*terms.length)];


    useEffect(() => {
        fetch(`https://app-stores.p.rapidapi.com/search?store=apple&term=${term}&language=en`, options)
        .then(response => response.json())
        .then(response => setAppleApps(response))
        .catch(err => console.error(err));
    }, [])

     console.log(appleApps)

    return(
        <Container textAlign="left"> 
        <h1>How about these creataions?</h1>
        <Card.Group itemsPerRow={1}>
            {appleAppsList}
        </Card.Group>
    </Container>
    )
}

export default AppleApps;