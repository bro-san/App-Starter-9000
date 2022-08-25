import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Container, Card } from "semantic-ui-react";
import CommentsCard from './CommentsCard';

function ProgramPage() {
    const [thisApp, setThisApp] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/programs/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(app => {
                    setThisApp(app)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    console.log(thisApp)

    const commentsList = thisApp.comments.map(comment => {
        return <CommentsCard key={comment.id}
        id={comment.id}
        post={comment.letter}
        poster={comment.user}
        // handleDelete={handleDelete}
        />
    })
    
    return (
        <Container textAlign="left"> 
        <h1>{thisApp.name}</h1>
        <img src={thisApp.icon} alt="app's icon"/>
        <h4>Category: <u>{thisApp.category}</u></h4> 
        <h4>Rating: <em>{thisApp.rating}</em></h4> 

        <Card.Group itemsPerRow={1}>
            {commentsList}
        </Card.Group>
        </Container>
    );
  }

export default ProgramPage;