import React from "react";
import { Header, Container, Menu, Icon, Button, Image, Label } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';

function AppFilterPage({updateStore, store, updateAdjective, adjective}) {
    
    const history = useHistory()
    
    console.log("'store' value:", store)
    
    function handleStoreClick(e){
        e.preventDefault()
        console.log(e.target.children)
        let value = e.target
        updateStore(value)
        console.log("after click 'store' value:", store)
    }

    function handleAdjClick(e){
        e.preventDefault()
        console.log(e.target.textContent)
        let value = e.target.textContent
        updateAdjective(value)
        history.push(`/fork/apps`)
        console.log("after click 'adjective' value:", adjective)
    }

    return (

        <Container textAlign="center">
            <Header class="ui sizer vertical segment">
                <h1 class="ui huge header ">Pick a community for consideration:</h1>  
            </Header>
            <Menu  fluid widths={2} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                <Button size='huge' color='blue' as='div' labelPosition='left' onClick={handleStoreClick}>
                        <Label size='huge' color='blue' as='a' basic>
                         <h2>Apple</h2>
                        </Label>
                        <Button size='huge' color='blue' icon>
                            <Icon name='apple' />
                        </Button>
                    </Button>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <Button size='huge' color='blue' as='div' labelPosition='left' onClick={handleStoreClick}>
                        <Label size='huge' color='blue' as='a' basic>
                         <h2>Google</h2>
                        </Label>
                        <Button size='huge' color='blue' icon>
                            <Icon name='google' />
                        </Button>
                    </Button>
                </Menu.Item>
            </Menu>
        <Header class="ui sizer vertical segment">
            <h1 class="ui large header ">Pick a word for motivation:</h1>  
        </Header>
            <Menu  fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    <Button  color='white' onClick={handleAdjClick}>
                        <Header as='h2' color='blue'>
                         Stimulation
                        </Header>
                    </Button>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <Button  color='white' onClick={handleAdjClick}>
                        <Header as='h2' color='blue'>
                         Excitation
                        </Header>
                    </Button>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                <Menu.Item textAlign="center" class="column">
                    <Button  color='white' onClick={handleAdjClick}>
                        <Header as='h2' color='blue'>
                         Sophistication
                        </Header>
                    </Button>
                </Menu.Item>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                <Menu.Item textAlign="center" class="column">
                    <Button  color='white' onClick={handleAdjClick}>
                        <Header as='h2' color='blue'>
                         Innovation
                        </Header>
                    </Button>
                </Menu.Item>
                </Menu.Item>
            </Menu>
            <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 
        </Container>
    );
  }

export default AppFilterPage;
