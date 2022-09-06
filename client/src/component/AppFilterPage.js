import React from "react";
import { Header, Container, Menu, Icon, Button } from "semantic-ui-react";
// import { Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function AppFilterPage({setStore, store}) {

    function handleClick(e){
        e.preventDefault()
        let value = e.target.innerText
        setStore(value.toLowerCase())
        console.log("'store' value:", store)
    }

    return (

        <Container textAlign="center">
            <Header class="ui sizer vertical segment">
                <h1 class="ui huge header ">Pick a community for consideration:</h1>  
            </Header>
            <Menu  fluid widths={2} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                <Button animated onClick={handleClick}>
                    <Button.Content visible >Apple</Button.Content>
                    <Button.Content hidden>
                        <Icon name='check square' />
                    </Button.Content>
                </Button>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <Button animated onClick={handleClick}>
                        <Button.Content visible >Android</Button.Content>
                        <Button.Content hidden>
                            <Icon name='check square' />
                        </Button.Content>
                    </Button>
                </Menu.Item>
            </Menu>
        <Header class="ui sizer vertical segment">
            <h1 class="ui large header ">Pick a word for motivation:</h1>  
        </Header>
            <Menu  fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/apps">Stimulation</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/fork/apps">Excitation</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/fork/apps">Sophistication</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium"> 
                        <Link to="/fork/apps">Innovation</Link>
                    </h2>
                </Menu.Item>
            </Menu>
        </Container>
    );
  }

export default AppFilterPage;
