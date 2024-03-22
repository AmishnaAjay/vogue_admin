import React, { useEffect, useRef, useState } from 'react'
import {  Main, Text, SubText,Div, Input, AccText, Signup, AccDiv, InputDiv } from './SignInElements';
import Button from '../../components/Button/Button';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          // Make a POST request to your login API
          const response = await axios.post('http://localhost:3000/root/login', {
              username,
              password
          });
          // If login is successful, you might want to store the token in local storage or session storage
          localStorage.setItem('token', response.data.token);
          navigate("/Product");

          // Clear input fields and error message
          setUsername('');
          setPassword('');
          setError('');
          
          // Redirect or perform any other action upon successful login
          // For example, you can use React Router to redirect to another page
      } catch (error) {
          // If login fails, set the error message
          setError('Invalid username or password');
      }
  };

  return (
    <>
     
    <Main>
      <Text>Sign In</Text>
      <SubText>Let's build something great</SubText>
      <Text> {error && <p>{error}</p>} </Text>
     
      
        <InputDiv>
            <Input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           ></Input>   
        </InputDiv>  
        <InputDiv>
        <Input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></Input> 
        </InputDiv>
          
     
      <Button title='Login' onClick={handleSubmit}/>

      <AccDiv>
        <AccText>Don't have an account?</AccText>
        <Signup >Signup</Signup>
      </AccDiv>
    </Main>


    </>
  )
}

export default SignIn
