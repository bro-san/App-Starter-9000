import React from "react";
import { Link } from "react-router-dom"
import { Card, Button, Icon } from "semantic-ui-react";

function FavAppCard({id, link, name, category, ratings, description, icons, screenshots}){
    
    return(
        <Card>
                <Card.Content class="header">
                    <h1>{name}</h1>
                    <img src={icons.medium} alt="app's icon"/>
                </Card.Content >

                <Card.Content class="header">
                    <a href={link}>Store Link</a>
                </Card.Content>

                <Card.Content  class="header">
                    <h4>Category:</h4> 
                    {category}
                </Card.Content >

                <Card.Content  class="header">
                    <h4>Rating:</h4>
                    {ratings.average}
                </Card.Content >

                <Card.Content  class="header">
                <h4>Description:</h4>
                    {description}
                </Card.Content>

                <Card.Content class="header">
                    <h4>Screenshot:</h4>
                    <img src={screenshots[0]} alt="app's screenshot #1"/>
                </Card.Content >
                <Button >
                    <Link to={`/${id}/RequestDetail`}>   
                        App Comments
                     </Link>
                </Button>
                <Button animated>
                    <Button.Content visible >Unfavorite?</Button.Content>
                    <Button.Content hidden>
                        <Icon name='heart outline' />
                    </Button.Content>
                </Button>
        </Card>
    )
}

export default FavAppCard;