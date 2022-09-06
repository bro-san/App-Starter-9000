import { Card, Container, Icon, Button } from "semantic-ui-react";
import { useEffect, useState } from 'react'

function ResponsesCard({text, id, setUpdatedApp, updatedApp}){
    const [thisResponse, setThisResponse] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    useEffect(()=>{
        fetch(`/responses/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(response => {
                    setThisResponse(response)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[updatedApp])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    console.log("thisResponse data:", thisResponse)

    const handleEdit = () => {
        let changes = {};
        changes.comment = prompt('Edit your response!', `${text}`);
        
        fetch(`/responses/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(
            {
            "note": changes.comment,
            }
        )
        })
        .then((response) => response.json())
        .then(data => {
        console.log("This reponse was just edited", data)
        setUpdatedApp(data)
        })  
    }

    function handleDelete() {
        fetch(`/responses/${id}`, {
            method: "DELETE"
        })
        setUpdatedApp({id})
    }

    return(
        <Container textAlign="right"> 
            <Card>
                <Card.Content  class="header">
                    <h4> <Icon name='long arrow alternate right' /> Response from user {thisResponse.user.username}:</h4>
                    {text}
                </Card.Content >
                <Button onClick={handleEdit}>
                        Edit Response
                </Button>
                <Button onClick={handleDelete}>
                        Delete Response
                </Button>
            </Card>
        </Container>

    )
}

export default ResponsesCard;