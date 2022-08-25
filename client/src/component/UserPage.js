import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import AppCard from "./AppCard";
import { Container, Card } from "semantic-ui-react";

function UserPage() {
    const [thisUser, setThisUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setThisUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    console.log(thisUser.programs)

    const appsList = thisUser.programs.map(app => {
        return <AppCard key={app.id}
        id={app.id}
        link={app.link}
        name={app.name}
        category={app.category}
        ratings={app.rating}
        description={app.description}
        icons={app.icon}
        screenshots={app.screenshot}
        // handleDelete={handleDelete}
        />
    })
    return (
        <Container textAlign="left"> 
        <h1>Hello, {thisUser.name}!</h1>
        <h3>Your Favorited Apps:</h3>
        <Card.Group itemsPerRow={1}>
            {appsList}
        </Card.Group>
        </Container>
    );
  }

export default UserPage;