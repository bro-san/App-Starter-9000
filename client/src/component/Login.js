import React, {useState} from 'react'
import { Form, Container, Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

function Login({updateUser}) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState([])
  const history = useHistory();

  const {username, password} = formData

  function handleSubmit(e){
    e.preventDefault()

    const user = {
      username,
      password
    }
      
    fetch('/login', {
      method: 'POST',
      headers:{'Content-Type': 'application/json',
      Accept: "application/json",
    },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
          res.json().then(user => {
            updateUser(user)
            console.log("This user just signed in", user)
            history.push(`/users/${user.id}`)
          })
      } else {
          res.json().then(json => setErrors(json.errors))
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (

    <Container textAlign="center"> 
        <h1>Authentication</h1>
        <h3>(Login)</h3>
        <Form  onSubmit={(e)=> handleSubmit(e)}>

        <Form.Field>
            <label>Username</label>
            <input type='text' name='username' placeholder='HackerMan66' value={username} onChange={handleChange} />
        </Form.Field>


        <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='password123' name='password' value={password} onChange={handleChange} />
        </Form.Field>


        <Button type='submit'>Login</Button>
        </Form>
        
    </Container>
  )
}

export default Login;