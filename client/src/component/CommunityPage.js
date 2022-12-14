import CommunityAppCard from './CommunityAppCard';
import { Container, Card, Image } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function CommunityPage({userInfo, updateAppDetails, appDetails}){


    const [communityApps, setCommunityApps] = useState([])

    useEffect(() => {
        fetch('/programs')
        .then(response => response.json())
        .then(response => setCommunityApps(response))
        .catch(err => console.error(err));
    }, [])

     console.log("These community apps have been fetched:", communityApps)

     const communityAppsList = communityApps.map(app => {
        return <CommunityAppCard key={app.id}
        app={app}
        userInfo={userInfo}
        updateAppDetails={updateAppDetails}
        appDetails={appDetails}
        />
    })

    return(
        <Container textAlign="left"> 
        <h1>The community is looking at these apps:</h1>
        <Card.Group itemsPerRow={3}>
            {communityAppsList}
        </Card.Group>
        <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 
    </Container>
    )
}

export default CommunityPage;