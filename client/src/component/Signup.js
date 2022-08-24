import React, {useState} from 'react'
import { Container } from 'semantic-ui-react';
import { Card, Form, Label, Button, Input, Checkbox } from 'semantic-ui-react';

const Signup = () => {
    const [form, setFormData] = useState({
        name: "Name",
        username: "",
        email: "",
        password: "Password",
        admin: "false"

    })
   
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/realtors', {
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
        .then(json => console.log(json))
      }


  return (
    <Container textAlign="center"> 
        <h1>Registration</h1>
        <h3>(Sign-up)</h3>
        <Form onSubmit={(e)=> handleSubmit(e)}>

            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => setFormData({...form, name: e.target.value})} value = {form.name}  />
            </Form.Field>

            <Form.Field>
                <label>email</label>
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
            
{/* 
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field> */}

            <Button type='submit'>Submit</Button>
        </Form>
            
    </Container>
        
  )
}

export default Signup;