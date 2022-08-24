import React from "react";
import { Header, Container, Menu } from "semantic-ui-react";
// import { Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
function Apple() {

    return (

        <Container textAlign="center">
        <Header class="ui sizer vertical segment">
            <h1 class="ui huge header ">Pick a word for motivation:</h1>  
        </Header>
            <Menu  fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/apple/apps">Stimulation</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/apple/apps">Excitation</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/apple/apps">Sophistication</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/apple/apps">Innovation</Link>
                    </h2>
                </Menu.Item>
            </Menu>
        </Container>
    );
  }

export default Apple;
