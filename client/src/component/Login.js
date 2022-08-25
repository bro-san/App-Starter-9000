import React, {useState} from 'react'
import { Form, Container, Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const Login = ({setUser, setUserInfo}) => {

  const [form, setForm] = useState({
    username: " ",
    password: " "
  })

  const [errors, setErrors] = useState([])
  const history = useHistory();

  function handleSubmit(e){
      
      
      fetch('/login', {
        method: 'POST',
        headers:{'Content-Type': 'application/json',
        Accept: "application/json",
      },
        body: JSON.stringify({
          "username": form.username.trim(),
          "password": form.password.trim()
        })
      })
      .then(res => {
        if(res.ok){
            res.json().then(user => {
                setUser(user)
                setUserInfo(user)
                history.push(`/users/${user.id}`)
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })
   
}

  return (

    <Container textAlign="center"> 
        <h1>Authentication</h1>
        <h3>(Login)</h3>
        <Form  onSubmit={(e)=> handleSubmit(e)}>

        <Form.Field>
            <label>Username</label>
            <input onChange = {(e)=>setForm({...form, username: e.target.value})} value = {form.username } />
        </Form.Field>


        <Form.Field>
            <label>Password</label>
            <input onChange = {(e)=>setForm({...form, password: e.target.value})} value = {form.password } />
        </Form.Field>


        <Button type='submit'>Login</Button>
        </Form>
        
    </Container>
  )
}

export default Login;