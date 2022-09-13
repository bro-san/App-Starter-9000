import { Menu, Header, Button, Icon }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function NavBar({user, setUser, userInfo, setUserInfo}) {
    const history = useHistory();
  
    function onLogout(e){
       e.preventDefault()
       fetch('/logout', {
          method: 'DELETE',
       })
       .then(response => {
          if(response.ok){
            setUser(false)
            response.json().then(() => {
              history.push("/login")
          }
        )}})
        setUserInfo("no user")
    }

    return (
        <Header>
            <Menu textAlign="center">
                <Button animated class='ui button'>
                  <NavLink exact to='/home'>
                  <Button.Content visible >
                     Initial Location  
                     <Icon name='home'></Icon>
                  </Button.Content>
                  <Button.Content hidden>
                     Home
                  </Button.Content>
                  </NavLink>
                </Button>

                <Button animated class='ui button'>
                  <NavLink exact to='/community'>
                  <Button.Content visible >      
                     Collaboration 
                     <Icon name='users'></Icon>
                  </Button.Content>
                  <Button.Content hidden>
                      Community Page
                  </Button.Content>
                  </NavLink>
                </Button>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? <Button animated>
                     <NavLink exact to='/signup'>
                        <Button.Content visible >
                        Registration
                        <Icon name='signup'></Icon>
                     </Button.Content>
                     <Button.Content hidden>
                     Sign up
                  </Button.Content>
                  </NavLink>
                  </Button> :
                  null}

               </Menu.Item>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? <Button animated>
                     <NavLink exact to='/login'>
                        <Button.Content visible >
                           Authentication
                           <Icon name='sign-in'></Icon>
                        </Button.Content>
                        <Button.Content hidden>
                           Sign in
                        </Button.Content>
                     </NavLink>
                  </Button> :
                  <Button animated onClick={(e)=> onLogout(e)}>
                     <Button.Content visible >
                     Resignation
                     <Icon name='sign-out'></Icon>
                     </Button.Content>
                     <Button.Content hidden>
                     Sign out
                     </Button.Content>
                  </Button>}
               </Menu.Item>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? null :
                     <Button animated>
                       <NavLink exact to={`/users/${userInfo.id}`}>
                           <Button.Content visible >
                               Personalization
                               <Icon name='sign-out'></Icon>
                           </Button.Content>
                           <Button.Content hidden>
                               User's Page
                           </Button.Content>
                        </NavLink>
                     </Button>}
               </Menu.Item>
        </Menu>
  </Header>
    )
}

export default NavBar;