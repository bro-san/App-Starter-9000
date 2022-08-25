import { useEffect, useState } from 'react'
import { Container, Card, Button } from "semantic-ui-react";
import ResponsesCard from './ResponsesCard';

function CommentsCard({post, id}){
    const [thisComment, setThisComment] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    useEffect(()=>{
        fetch(`/comments/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(comment => {
                    setThisComment(comment)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    console.log(thisComment)
    const responsesList = thisComment.responses.map(response => {
        return <ResponsesCard key={response.id}
        id={response.id}
        text={response.note}
        // handleDelete={handleDelete}
        />
    })

    return(
        <Container textAlign="left"> 
            <br></br>
            <Card>
                <Card.Content  class="header">
                    <h4>Comment from user {thisComment.user.username}:</h4>
                    {post}
                </Card.Content >
                <Button >
                        Add Your Own Response!
                </Button>
            </Card>
            <br></br>
            <Card.Group itemsPerRow={1}>
                {responsesList}
            </Card.Group>
            <br></br>
        </Container>
    )
}

export default CommentsCard;