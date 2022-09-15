import { Card, Button, Icon, Image, Container, Header } from "semantic-ui-react";
import CommentsCard from './CommentsCard';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


function ProgramPage({appDetails, userInfo, updateAppDetails}) {
    
    const params = useParams()
    // const [updatedComment, setUpdatedComment] = useState("this") 
    const [updatedApp, setUpdatedApp] = useState ({})

    useEffect(()=>{
        fetch(`/programs/${params.id}`)
        .then(res => res.json())
        .then(data => updateAppDetails(data))
      }, [updatedApp])
    
    console.log("appDetails data from ProgramPage:", appDetails)

    function handleFavClick(e) {
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

    function handleCommentAdd(e) {
        e.preventDefault()
        let changes = {};
        changes.comment = prompt('Add your comment!', ``);
        
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(
                {
                    "letter": changes.comment,
                    "user_id": userInfo.id,
                    "program_id": appDetails.id,
                }
            )
            })
            .then(response => response.json())
            .then(data => {
                console.log("This comment was just added", data)
                // console.log("userInfo id:", userInfo.id)
                // console.log("program id:", appDetails.id)
                setUpdatedApp(data)
            })
    }

    function setCommentsList(appDetails) {
        let commentsListConditional
        if ('comments' in appDetails) {
            commentsListConditional = appDetails.comments.map(comment => {
                    return <CommentsCard key={comment.id}
                    id={comment.id}
                    post={comment.letter}
                    setUpdatedApp={setUpdatedApp}
                    updatedApp={updatedApp}
                    userInfo={userInfo}
                    // setUpdatedComment={setUpdatedComment}
                    />
            })
        } else {
                commentsListConditional = "No comments yet!"
        }
        return(commentsListConditional)
    }
    
    return (
        <Container>
        <Card.Group itemsPerRow={1}>
            <Card>
                <Card.Content class="header">
                    <h1>{appDetails.name}</h1>
                    <img src={appDetails.icon} alt="app's icon"/>
                </Card.Content >

                <Card.Content class="header">
                    <a href={appDetails.link} target="_blank" rel="noopener noreferrer">Store Link</a>
                </Card.Content>

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
                    <Image src={appDetails.screenshot_one} alt="app's screenshot #1" size='medium' />
                    <Image src={appDetails.screenshot_two} alt="app's screenshot #2" size='medium'/>
                    <Image src={appDetails.screenshot_three} alt="app's screenshot #3" />
                </Card.Content >
                <Button inverted color='blue' animated onClick={handleFavClick}>
                    <Button.Content visible >
                        <Header color='blue'>Favorite?</Header>
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon.Group>
                            <Icon inverted color='pink' size='big' name='heart' />
                            <Icon color='violet' name='plus' />
                        </Icon.Group>
                    </Button.Content>
                </Button>
               
                <Button color='blue' onClick={handleCommentAdd}>
                     <h3><em>Add Your Own Comment!</em></h3>
                </Button>
            </Card>
  
        {setCommentsList(appDetails)}

        </Card.Group>
        
        <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 

        </Container>
    );
  }

export default ProgramPage;