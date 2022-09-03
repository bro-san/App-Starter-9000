import { useEffect, useState } from 'react'
import { Container, Card, Button } from "semantic-ui-react";
import ResponsesCard from './ResponsesCard';

function CommentsCard({post, id, setUpdatedApp, userInfo}){
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

    console.log("thisComment data:", thisComment)
    const responsesList = thisComment.responses.map(response => {
        return <ResponsesCard key={response.id}
        id={response.id}
        text={response.note}
        // handleDelete={handleDelete}
        />
    })

    const handleEdit = () => {
        let changes = {};
        changes.comment = prompt('Edit your comment!', `${post}`);
        
        fetch(`/comments/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(
            {
            "letter": changes.comment,
            }
        )
        })
        .then((response) => response.json())
        .then(data => {
        console.log("This comment was just edited", data)
        setUpdatedApp(data)
        })  
}

    function handleDelete() {
        fetch(`/comments/${id}`, {
            method: "DELETE"
        })
        setUpdatedApp({})
    }

    function hanldeAddResponse() {
        let changes = {};
        changes.response = prompt('Add your response!', ``);
        
        fetch('/responses', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(
                {
                    "note": changes.response,
                    "user_id": userInfo.id,
                    "comment_id": thisComment.id,
                }
            )
            })
            .then(response => response.json())
            .then(data => {
                console.log("This comment was just added", data)
                console.log("userInfo id:", userInfo.id)
                console.log("comment id:", thisComment.id)
                setUpdatedApp(data)
            })
    }

    return(
        <Container textAlign="left"> 
            <br></br>
            <Card>
                <Card.Content  class="header">
                    <h4>Comment from user {thisComment.user.username}:</h4>
                    {post}
                </Card.Content >
                <Button onClick={handleEdit}>
                        Edit Comment
                </Button>
                <Button onClick={handleDelete}>
                        Delete Comment
                </Button>
                <Button onClick={hanldeAddResponse}>
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