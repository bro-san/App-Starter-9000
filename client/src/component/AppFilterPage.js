import React from "react";
import { Header, Container, Menu, Icon, Button, Image } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';

function AppFilterPage({updateStore, storeInfo, store, updateAdjective, adjective}) {
    
    const history = useHistory()
    
    // console.log("'storeInfo' value:", storeInfo)
    // console.log("'store' value:", store)
    
    function handleStoreClick(e){
        e.preventDefault()
        console.log(e.target.innerText)
        let value = e.target.innerText
        updateStore(value)
    }

    function handleAdjClick(e){
        e.preventDefault()
        console.log(e)
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
                {storeInfo === 'Apple' ? <Button size='large' color='blue'>
                    <h1><Icon size='large' name='apple' /></h1>
                    </Button> :
                    <Button name='Apple' size='huge' color='blue' onClick={handleStoreClick}>
                    <h1>Apple</h1>
                    </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                {storeInfo === 'Google' ? <Button size='large' color='blue'>
                    <h1><Icon size='large' name='google' /></h1>
                    </Button> :
                    <Button name='Google' size='huge' color='blue' onClick={handleStoreClick}>
                    <h1>Google</h1>
                    </Button>}
                </Menu.Item>
            </Menu>
        {store === true ?
        <Header class="ui sizer vertical segment">
            <h1 class="ui large header ">Pick a word for motivation:</h1>  
        </Header> : null}

        {store === true ?
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
        : null}
        
            <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 
        </Container>
    );
  }

export default AppFilterPage;
