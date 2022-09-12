import { Header, Container, Icon, Image, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function Home() {
    
        
    return (

        <Container textAlign="center">
        <Header class="ui sizer vertical segment">
            <h1 class="ui huge header ">Looking for App Inspiration?</h1>  
        </Header>
        <Header class="ui sizer vertical segment">
            <h1 class="ui large header ">You've come to the right destination!</h1>  
        </Header>
        <br></br>
        <br></br>
        
        <Button animated color='blue' size='massive'>
            <Button.Content visible>
                 Spark my <i>imagination</i>!
            </Button.Content>  
            <Button.Content hidden>
            <Link to="/fork"><Icon inverted color='white' size='large' name='magic' /></Link>
            </Button.Content>
        </Button>
            <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg'alt/> 
        </Container>
    );
  }

export default Home;
