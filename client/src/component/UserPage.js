import FavAppCard from "./FavAppCard";
import { Container, Card } from "semantic-ui-react";
import { useEffect, useState } from 'react'


function UserPage({userInfo, updateAppDetails, updateUser }) {

  const [updateFavs, setUpdateFavs] = useState({})
  
  useEffect(()=>{
    fetch(`/users/${userInfo.id}`)
    .then(res => res.json())
    .then(data => updateUser(data))
  }, [updateFavs])

    const appsList = userInfo.favorites.map(fav => {
        return <FavAppCard key={fav.id}
        id={fav.id}
        handleUnfavorite={handleUnfavorite}
        updateAppDetails={updateAppDetails}
        />
    })

    function handleUnfavorite(id) {
        console.log("hanldeUnfavorite -> Removed!")
        setUpdateFavs({id})
      }

    return (
        <Container textAlign="left"> 
        <h1>Hello, {userInfo.name}!</h1>
        <h3>Your Favorited Apps:</h3>
        <Card.Group itemsPerRow={1}>
            {appsList}
        </Card.Group>
        </Container>
    );
  }

export default UserPage;