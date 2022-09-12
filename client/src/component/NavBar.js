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
                        Home
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
                  Community Page
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
                     Sign up
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
                     Sign in
                  </Button.Content>
                  </Button> :
                  <Button onClick={(e)=> onLogout(e)}>
                     Resignation
                     <br></br>
                     (Sign out)
                  </Button>}
               </Menu.Item>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? null :
                     <Button>
                        <NavLink exact to={`/users/${userInfo.id}`}>   
                           Personalization
                        </NavLink> 
                     </Button>}
               </Menu.Item>
        </Menu>
  </Header>
    )
}

export default NavBar;