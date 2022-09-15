import React from "react";
import { Link } from "react-router-dom"
import { Card, Button, Image, Header, Icon } from "semantic-ui-react";

function AppCard({app, updateAppDetails, appDetails}){

    const {name, description, category, ratings, icons, screenshots} = app
    const screenshot_one =  screenshots[0] 
    const screenshot_two = screenshots[1] 
    const screenshot_three = screenshots[2] 
    const screenshot_four = screenshots[3] 
    const screenshot_five = screenshots[4] 
    const screenshot_six = screenshots[5] 
    const screenshot_seven = screenshots[6] 
    const screenshot_eight = screenshots[7] 
    const screenshot_nine = screenshots[8] 
    const screenshot_ten = screenshots[10] 

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
                "screenshot_one": screenshot_one,
                "screenshot_two": screenshot_two,
                "screenshot_three": screenshot_three,
                "screenshot_four": screenshot_four,
                "screenshot_five": screenshot_five,
                "screenshot_six": screenshot_six,
                "screenshot_seven": screenshot_seven,
                "screenshot_eight": screenshot_eight,
                "screenshot_nine": screenshot_nine,
                "screenshot_ten": screenshot_ten,
            }
          )
        }).then(response => response.json()).then(app => {
            updateAppDetails(app)
            console.log("This app was just added to db:", app)
        })
    }

    return(
        <Card>
                <Card.Content class="header">
                    <h1>{name}</h1>
                    <Image src={icons.medium} alt="app's icon"/>
                </Card.Content >

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
                    <Image src={screenshots[0]} alt="app's screenshot #1" size='small' />
                    {/* <img src={screenshots[1]} alt="app's screenshot #2"/>
                    <img src={screenshots[2]} alt="app's screenshot #3"/> */}
                </Card.Content >
                <Button animated color="blue" onClick={handleClick}>
                    <Link to={`/programs/${appDetails.id}`}>   
                        <Button.Content color='white' visible >
                            <Header as='h3' inverted color='white'>App's Details</Header> 
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon inverted color='white' size='large' name='info circle'/>
                            <Icon inverted color='white' size='large' name='chat'/>
                        </Button.Content>                     
                    </Link>
                </Button>
        </Card>
    )
}

export default AppCard;