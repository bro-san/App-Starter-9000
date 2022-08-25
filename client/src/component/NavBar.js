import { Menu, Header, Button }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function NavBar({user, setUser}) {
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
    }

    return (
        <Header>
            <Menu textAlign="center">
                <Button class='ui button'>
                     <NavLink exact to='/home'>   
                     Initial Location
                     </NavLink>
                </Button>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? <Button>
                  <NavLink exact to='/login'>   
                     Registration
                  </NavLink> 
                  </Button> :
                  null}
               </Menu.Item>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? <Button>
                  <NavLink exact to='/login'>   
                     Authentication
                  </NavLink> 
                  </Button> :
                  <Button onClick={(e)=> onLogout(e)}>
                     Resignation
                  </Button>}
               </Menu.Item>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? null :
                     <Button>
                        <NavLink exact to='/users/:id'>   
                           Personalization
                        </NavLink> 
                     </Button>}
               </Menu.Item>
        </Menu>
  </Header>
    )
}

export default NavBar;