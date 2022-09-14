import FavAppCard from "./FavAppCard";
import { Container, Card, Image } from "semantic-ui-react";
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
        <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 
        </Container>
    );
  }

export default UserPage;