import { Card, Container, Icon } from "semantic-ui-react";
import { useEffect, useState } from 'react'

function ResponsesCard({text, id}){
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
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    console.log(thisResponse)

    return(
        <Container textAlign="right"> 
            <Card>
                <Card.Content  class="header">
                    <h4> <Icon name='long arrow alternate right' /> Response from user {thisResponse.user.username}:</h4>
                    {text}
                </Card.Content >
            </Card>
        </Container>

    )
}

export default ResponsesCard;