import FavAppCard from "./FavAppCard";
import { Container, Card } from "semantic-ui-react";

function UserPage({userInfo}) {

    // const appsList = userInfo.favorites.map(fav => {
    //     return <FavAppCard key={fav.id}
    //     id={fav.id}
    //     handleUnfavorite={handleUnfavorite}
    //     />
    // })

    function handleUnfavorite() {
        console.log("Removed!")
      }

    return (
        <Container textAlign="left"> 
        <h1>Hello, {userInfo.name}!</h1>
        <h3>Your Favorited Apps:</h3>
        <Card.Group itemsPerRow={1}>
            {"appsList"}
        </Card.Group>
        </Container>
    );
  }

export default UserPage;