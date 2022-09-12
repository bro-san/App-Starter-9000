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
                  <Button.Content visible >
                     <NavLink exact to='/home'>   
                     Initial Location  
                     <Icon name='home'></Icon>
                     </NavLink>
                  </Button.Content>
                  <Button.Content hidden>
                     <NavLink exact to='/home'>
                     Home
                     </NavLink>
                  </Button.Content>
                </Button>

                <Button animated class='ui button'>
                  <Button.Content visible >
                     <NavLink exact to='/community'>   
                     Collaboration 
                     <Icon name='users'></Icon>
                     </NavLink>
                  </Button.Content>
                  <Button.Content hidden>
                  <NavLink exact to='/community'>   
                      Community Page
                      </NavLink>
                  </Button.Content>
                </Button>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? <Button animated>
                     <Button.Content visible >
                        <NavLink exact to='/signup'>   
                        Registration
                        <Icon name='sign-in'></Icon>
                  </NavLink>
                  </Button.Content>
                  <Button.Content hidden>
                     <NavLink exact to='/signup'>   
                     Sign up
                     </NavLink>
                  </Button.Content>
                  </Button> :
                  null}
               </Menu.Item>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? <Button animated>
                     <Button.Content visible >
                        <NavLink exact to='/login'>   
                        Authentication
                        <Icon name='signup'></Icon>
                  </NavLink> 
                  </Button.Content>
                  <Button.Content hidden>
                     <NavLink exact to='/login'>
                     Sign in
                     </NavLink>
                  </Button.Content>
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
                        <Button.Content visible >
                           <NavLink exact to={`/users/${userInfo.id}`}>   
                            Personalization
                            <Icon name='sign-out'></Icon>
                           </NavLink>
                         </Button.Content>
                        <Button.Content hidden>
                           <NavLink exact to={`/users/${userInfo.id}`}>   
                            User's Page
                          </NavLink>
                        </Button.Content>
                     </Button>}
               </Menu.Item>
        </Menu>
  </Header>
    )
}

export default NavBar;