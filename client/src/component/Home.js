import { Header, Container, Menu, Image } from "semantic-ui-react";
// import { Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function Home({setStore, userInfo}) {

    function handleClick(e){
        let value = e.target.innerText
        setStore(value.toLowerCase())
    }
    
    console.log("current user info:", userInfo)
    
    return (

        <Container textAlign="center">
        <Header class="ui sizer vertical segment">
            <h1 class="ui huge header ">Looking for Inspiration?</h1>  
        </Header>
        <Header class="ui sizer vertical segment">
            <h1 class="ui large header ">You've come to the right destination!</h1>  
        </Header>
        <Header class="ui sizer vertical segment">
            <h2 class="ui header ">Which app community sparks your <i>imagination</i>:</h2>  
        </Header>
            <Menu  fluid widths={2} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/fork" onClick={(e)=> handleClick(e)}>Apple</Link>
                        <br></br>
                        (iOS)
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/fork" onClick={(e)=> handleClick(e)}>Google</Link>
                        <br></br>
                        (Android)
                    </h2>
                </Menu.Item>
            </Menu>
            <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg'alt/> 
        </Container>
    );
  }

export default Home;
