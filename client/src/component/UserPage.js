import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import FavAppCard from "./FavAppCard";
import { Container, Card } from "semantic-ui-react";

function UserPage() {
    const [thisUser, setThisUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${`id`}`)
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
    },[handleUnfavorite()])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    console.log(thisUser)

    const appsList = thisUser.favorites.map(fav => {
        return <FavAppCard key={fav.id}
        id={fav.id}
        handleUnfavorite={handleUnfavorite}
        />
    })

    function handleUnfavorite() {
        console.log("Removed!")
      }

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