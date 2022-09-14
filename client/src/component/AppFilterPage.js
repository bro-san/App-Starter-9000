import React from "react";
import { Header, Container, Menu, Icon, Button, Image } from "semantic-ui-react";
import AdjectiveMenu from "./AdjectiveMenu";
import AppsList from "./AppsList";

function AppFilterPage({updateStore, storeInfo, store, updateAdjective, adjective, adjBoolean, userInfo, appDetails, updateAppDetails, setAdjBoolean}) {
        
    function handleStoreClick(e){
        e.preventDefault()
        console.log(e.target.innerText)
        let value = e.target.innerText
        updateStore(value)
    }

    function handleAdjClick(e){
        e.preventDefault()
        console.log(e.target.innerText)
        let value = e.target.innerText
        updateAdjective(value)
        console.log("after click 'adjective' value:", adjective)
    }

    function handleAdjUnclick(){
        updateAdjective("adjective not set")
        setAdjBoolean(false)
    }

    return (
        <>
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
            <AdjectiveMenu adjective={adjective} handleAdjClick={handleAdjClick} handleAdjUnclick={handleAdjUnclick}/>
            : null}
        </Container>
                <br></br>
            {adjBoolean === true ? 
            <AppsList adjective={adjective} storeInfo={storeInfo} userInfo={userInfo} appDetails={appDetails} updateAppDetails={updateAppDetails}/>
            : null}   

            <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/>
        </>
    );
  }

export default AppFilterPage;
