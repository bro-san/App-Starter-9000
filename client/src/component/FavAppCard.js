import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Card, Button, Icon, Image } from "semantic-ui-react";

function FavAppCard({id, handleUnfavorite, updateAppDetails}){
    const [thisFav, setThisFav] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    useEffect(()=>{
        fetch(`/favorites/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(fav => {
                    setThisFav(fav)
                    updateAppDetails(fav.program)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    if(loading) return <h1><em>You haven't favorited any apps!</em></h1>
    if(errors) return <h1>{errors}</h1>

    console.log("thisFav data:", thisFav)

    function handleClick() {
        fetch(`/favorites/${id}`, {
            method: "DELETE"
        })
        handleUnfavorite(id)
    }
    return(
        <Card>
                <Card.Content class="header">
                    <h1>{thisFav.program.name}</h1>
                    <img src={thisFav.program.icon} alt="app's icon"/>
                </Card.Content >

                <Card.Content class="header">
                    <a href={thisFav.program.link} target="_blank" rel="noopener noreferrer">Store Link</a>
                </Card.Content>

                <Card.Content  class="header">
                    <h4>Category:</h4> 
                    {thisFav.program.category}
                </Card.Content >

                <Card.Content  class="header">
                    <h4>Rating:</h4>
                    {thisFav.program.rating}
                </Card.Content >

                <Card.Content  class="header">
                <h4>Description:</h4>
                    {thisFav.program.description}
                </Card.Content>

                <Card.Content class="header">
                    <h4>Screenshot:</h4>
                    <Image src={thisFav.program.screenshot_one} alt="app's screenshot #1" size='medium'/>
                    <Image src={thisFav.program.screenshot_two} alt="app's screenshot #2" size='medium'/>
                    <Image src={thisFav.program.screenshot_three} alt="app's screenshot #3" size='medium'/>
                    <Image src={thisFav.program.screenshot_four} alt="app's screenshot #4" size='medium'/>
                    <Image src={thisFav.program.screenshot_five} alt="app's screenshot #5" size='medium'/>

                </Card.Content >
                <Button >
                    <Link to={`/programs/${thisFav.program.id}`}>   
                        App's Details
                     </Link>
                </Button>
                <Button animated onClick={handleClick}>
                    <Button.Content visible >Unfavorite?</Button.Content>
                    <Button.Content hidden>
                        <Icon name='heart outline' />
                    </Button.Content>
                </Button>
        </Card>
    )
}

export default FavAppCard;