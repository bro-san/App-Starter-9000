import { Card, Button, Icon } from "semantic-ui-react";
import CommentsCard from './CommentsCard';

function ProgramPage({appDetails, userInfo}) {
    
    console.log("appDetails data from ProgramPage:", appDetails)

    function handleClick(e) {
        e.preventDefault()
            fetch('/favorites', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(
              {
                  "user_id": userInfo.id,
                  "program_id": appDetails.id,
              }
            )
          })
          .then(response => response.json())
          .then(fav => {
              console.log("This favorite was just added", fav)
              console.log("userInfo id:", userInfo.id)
              console.log("program id:", appDetails.id)
          })
    }

    // const commentsList = appDetails.comments.map(comment => {
    //     return <CommentsCard key={comment.id}
    //     id={comment.id}
    //     post={comment.letter}
    //     // handleDelete={handleDelete}
    //     />
    // })
    
    return (
        <Card.Group itemsPerRow={1}>
            <Card>
                <Card.Content class="header">
                    <h1>{appDetails.name}</h1>
                    <img src={appDetails.icon} alt="app's icon"/>
                </Card.Content >

                {/* <Card.Content class="header">
                    <a href={url}>Store Link</a>
                </Card.Content> */}

                <Card.Content  class="header">
                    <h4>Category:</h4> 
                    {appDetails.category}
                </Card.Content >

                <Card.Content  class="header">
                    <h4>Rating:</h4>
                    {appDetails.rating}
                </Card.Content >

                <Card.Content  class="header">
                <h4>Description:</h4>
                    {appDetails.description}
                </Card.Content>

                <Card.Content class="header">
                    <h4>Screenshot:</h4>
                    <img src={appDetails.screenshot_one} alt="app's screenshot #1"/>
                    <img src={appDetails.screenshot_two} alt="app's screenshot #2"/>
                    <img src={appDetails.screenshot_three} alt="app's screenshot #3"/>
                </Card.Content >
                {/* <Button onClick={handleClick}>
                    <Link to={`/programs/${id}`}>   
                        App Details
                        </Link>
                </Button> */}
                <Button animated onClick={handleClick}>
                    <Button.Content visible >Favorite?</Button.Content>
                    <Button.Content hidden>
                        <Icon name='heart' />
                    </Button.Content>
                </Button>
            </Card>

        <Button >
            <h2><em>Add Your Own Comment!</em></h2>
        </Button>

            {"commentsList"}

        </Card.Group>
    );
  }

export default ProgramPage;