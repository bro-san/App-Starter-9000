import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Card, Button, Image } from "semantic-ui-react";

function CommunityAppCard({app, updateAppDetails, appDetails}){

    const {name, category, rating, icon, screenshot_one, screenshot_two, screenshot_three} = app

    function handleClick(e) {
        e.preventDefault()
        updateAppDetails(app)
        console.log("appDetails info:", app)
    }

    return(
        <Card>
                <Card.Content class="header">
                    <h1>{name}</h1>
                    <Image src={icon} alt="app's icon"/>
                </Card.Content >

                <Card.Content  class="header">
                    <h4>Category:</h4> 
                    {category}
                </Card.Content >

                <Card.Content  class="header">
                    <h4>Rating:</h4>
                    {rating}
                </Card.Content >

                {/* <Card.Content class="header">
                    <h4>Screenshot:</h4>
                    <img src={screenshot_one} alt="app's screenshot #1"/>
                    <img src={screenshot_two} alt="app's screenshot #2"/>
                    <img src={screenshot_three} alt="app's screenshot #3"/>
                </Card.Content > */}
                <Button onClick={handleClick}>
                    <Link to={`/programs/${app.id}`}>   
                        App Details
                     </Link>
                </Button>
        </Card>
    )
}

export default CommunityAppCard;