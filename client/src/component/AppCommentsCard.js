import React from "react";
import { Link } from "react-router-dom"
import { Card, Button, Icon } from "semantic-ui-react";

function AppCommentsCard({comment}){
    
    return(
        <Card>
                <Card.Content class="header">
                    <h1>{comment}</h1>
                </Card.Content >

        </Card>
    )
}

export default AppCommentsCard;