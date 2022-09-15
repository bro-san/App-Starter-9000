import FavAppCard from "./FavAppCard";
import { Container, Card, Image } from "semantic-ui-react";
import { useEffect, useState } from 'react'


function UserPage({userInfo, updateAppDetails, updateUser, user}) {

  const [updateFavs, setUpdateFavs] = useState({})
  
  useEffect(()=>{
    fetch(`/users/${userInfo.id}`)
    .then(res => res.json())
    .then(data => updateUser(data))
  }, [updateFavs])

  function setFavsList(userInfo) {
    let favsListConditional
    let favsCheck = userInfo.favorites
    if ((favsCheck != null || undefined) && (favsCheck.length != 0)) {
        favsListConditional = userInfo.favorites.map(fav => {
          return <FavAppCard key={fav.id}
          id={fav.id}
          handleUnfavorite={handleUnfavorite}
          updateAppDetails={updateAppDetails}
          />
      })
    } else {
            favsListConditional = "You haven't added any favorite apps yet!"
    }
    return(favsListConditional)
}

    function handleUnfavorite(id) {
        console.log("hanldeUnfavorite -> Removed!")
        setUpdateFavs({id})
      }

    return (
        <Container textAlign="left"> 
        <h1>Hello, {userInfo.name}!</h1>
        <h3>Your Favorited Apps:</h3>
        <br></br>
        <Card.Group itemsPerRow={1}>
            {setFavsList(userInfo)}
        </Card.Group>
        <br></br>
        <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 
        </Container>
    );
  }

export default UserPage;