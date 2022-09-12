import React from "react";
import { Header, Container, Menu, Icon, Button, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function AppFilterPage({updateStore, store}) {
    console.log("initial 'store' value:", store)
    
    function handleClick(e){
        e.preventDefault()
        // console.log(e.target.attributes.label.textContent)
        let value = e.target.attributes.label.textContent
        updateStore(value)
        console.log("after click 'store' value:", store)
    }

    return (

        <Container textAlign="center">
            <Header class="ui sizer vertical segment">
                <h1 class="ui huge header ">Pick a community for consideration:</h1>  
            </Header>
            <Menu  fluid widths={2} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                <Button animated color='blue' onClick={handleClick}>
                    <Button.Content visible >Apple</Button.Content>
                    <Button.Content hidden>
                        <Icon label='apple' name='apple' />
                    </Button.Content>
                </Button>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <Button animated color='blue' onClick={handleClick}>
                        <Button.Content visible >Google</Button.Content>
                        <Button.Content hidden>
                            <Icon label='google' name='google' />
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
            <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 
        </Container>
    );
  }

export default AppFilterPage;
