import React from "react";
import AndriodAppCard from "./AppleAppCard";
import { Container, Card } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function AndriodApps(){
    
    const [andriodApps, setAndriodApps] = useState([])

    const andriodAppsList = andriodApps.map(app => {
        return <AndriodAppCard key={app.id}
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
    
    const terms = ['cool', 'dumb', 'pretty', 'fast', 'popular', 'trendy', 'sophisticated', 'advanced', 'hacks', 'steamy', 'old', 'vague']
    let term = terms[Math.floor(Math.random()*terms.length)];


    useEffect(() => {
        fetch(`https://app-stores.p.rapidapi.com/search?store=google&term=${term}&language=en`, options)
        .then(response => response.json())
        .then(response => setAndriodApps(response))
        .catch(err => console.error(err));
    }, [])

     console.log(andriodApps)

     const nouns = ['creations', 'recommendations', 'iterations']
     let noun = nouns[Math.floor(Math.random()*nouns.length)];


    return(
        <Container textAlign="left"> 
        <h1>How about these {noun}?</h1>
        <Card.Group itemsPerRow={1}>
            {andriodAppsList}
        </Card.Group>
    </Container>
    )
}

export default AndriodApps;