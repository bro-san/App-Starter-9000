import React from "react";
import { Link } from "react-router-dom"
import { Card, Button, Icon } from "semantic-ui-react";

function AppCard({app, userInfo}){
    
    const {id, url, name, category, ratings, description, icons, screenshots} = app
    const {screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6, screenshot7, screenshot8, screenshot9, screenshot10} = screenshots

    function handleClick(e) {
        e.preventDefault()
        fetch('/programs', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(
            {
                "name": app.name,
                "link": app.url,
                "category": app.category,
                "rating": app.ratings.average,
                "description": app.description,
                "icon": app.icons.medium,
                "screenshot1": screenshot1,
                "screenshot2": screenshot2,
                "screenshot3": screenshot3,
                "screenshot4": screenshot4,
                "screenshot5": screenshot5,
                "screenshot6": screenshot6,
                "screenshot7": screenshot7,
                "screenshot8": screenshot8,
                "screenshot9": screenshot9,
                "screenshot10": screenshot10,
            }
          )
        })
        .then(response => response.json())
        .then(app => {
            console.log("This app was just fav'd and added:", app)
        })
        .then(
            fetch('/favorites', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(
              {
                  "user_id": userInfo.id,
                  "program_id": app.id,
              }
            )
          })
          .then(response => response.json())
          .then(fav => {
              console.log("This favorite was just added", fav)
          })
        )
    }

    return(
        <Card>
                <Card.Content class="header">
                    <h1>{name}</h1>
                    <img src={icons.medium} alt="app's icon"/>
                </Card.Content >

                <Card.Content class="header">
                    <a href={url}>Store Link</a>
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
                    <img src={screenshots[1]} alt="app's screenshot #2"/>
                    <img src={screenshots[2]} alt="app's screenshot #3"/>
                </Card.Content >
                <Button >
                    <Link to={`/programs/${id}`}>   
                        App Comments
                     </Link>
                </Button>
                <Button animated onClick={handleClick}>
                    <Button.Content visible >Favorite?</Button.Content>
                    <Button.Content hidden>
                        <Icon name='heart' />
                    </Button.Content>
                </Button>
        </Card>
    )
}

export default AppCard;