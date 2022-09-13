import React, {useState} from 'react'
import { Container, Form, Button, Image } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

function Signup({updateUser}) {
    
    const history = useHistory();

    const [form, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        admin: "false"

    })
   
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(
            {
                "name": form.name,
                "username": form.username,
                "email": form.email,
                "password": form.password,
                "admin": "false"
            }
          )
        })
        .then(response => response.json())
        .then(user => {
            console.log("This user just signed up", user)
            updateUser(user)
            history.push(`/users/${user.id}`)
        })
      }


  return (
    <Container textAlign="center"> 
        <h1>Registration</h1>
        <h3>(Sign up)</h3>
        <Form onSubmit={(e)=> handleSubmit(e)}>

            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => setFormData({...form, name: e.target.value})} value = {form.name}  />
            </Form.Field>

            <Form.Field>
                <label>Email</label>
                <input placeholder='joe@flatironschool.com' onChange={(e) => setFormData({...form, email: e.target.value})} value = {form.email} />
            </Form.Field>

            {/* <Form.Field>
                <label>Company</label>
                <input placeholder='Company' onChange={(e) => setFormData({...form, company: e.target.value})} value = {form.company} />
            </Form.Field> */}

            <Form.Field>
                <label> Username</label>
                <input placeholder='HackerMan66' onChange={(e) => setFormData({...form, username: e.target.value})} value = {form.username} />
            </Form.Field>

            <Form.Field>
                <label>Password</label>
                <input placeholder='password123' onChange={(e) => setFormData({...form, password: e.target.value})} value = {form.password}/>
            </Form.Field>

            <Button type='submit'>Submit</Button>
        </Form>
        <Image src='https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg' alt='website logo'/> 
    </Container>    
  )
}

export default Signup;