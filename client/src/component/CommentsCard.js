import { Card } from "semantic-ui-react";

function CommentsCard({post, poster}){
    
    return(
        <Card>
                <Card.Content  class="header">
                    <h4>Comment from  {poster}:</h4>
                    {post}
                </Card.Content >
        </Card>
    )
}

export default CommentsCard;