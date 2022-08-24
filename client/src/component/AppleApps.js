import React from "react";
import AppleAppCard from "./AppleAppCard";
import { Container, Card } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function AppleApps(){
    
    const [appleApps, setRequests] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '273a166339mshd767c60ebd4c95cp1aea2cjsn3f5b1c4f3066',
            'X-RapidAPI-Host': 'app-stores.p.rapidapi.com'
        }
    };
    
    fetch('https://app-stores.p.rapidapi.com/search?store=apple&term=cool&language=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return(
        <>
        <h1>List of Apple apps...</h1>
        <AppleAppCard/>
        </>
    )
}

export default AppleApps;