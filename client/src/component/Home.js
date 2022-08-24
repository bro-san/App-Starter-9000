import React from "react";
import { Header, Container, Menu } from "semantic-ui-react";
// import { Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
function Home() {

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
                        <Link to="/apple">Apple</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/andriod">Andriod</Link>
                    </h2>
                </Menu.Item>
            </Menu>
        </Container>
    );
  }

export default Home;
