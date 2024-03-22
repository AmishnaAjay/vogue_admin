import React, { useState } from 'react';
import { Img, Main, Text, SubText, PhnText, Div, Divp, PassDiv, Divc, Input, AccText, SignUp, AccDiv, PDiv, Drop, Req } from './UserRegElements';
import Button from '../../components/Button/Button';
import { CaretDownOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



function UserReg() {

    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState("");
  
    const [cpassword, setCpassword] = useState("");
    const [cvisible, setCvisible] = useState("");
  
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleMenuOne = () => {
      setOpen(false);
      setValue("Customer");
    };
  
    const handleMenuTwo = () => {
      setOpen(false);
      setValue("Photograper");
    };
  
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
   
      // States for checking the errors
      const [submitted, setSubmitted] = useState(false);
      const [error, setError] = useState(false);
   
      // Handling the name change
      const handleName = (e) => {
          setName(e.target.value);
          setSubmitted(false);
      };
   
      // Handling the email change
      const handleEmail = (e) => {
          setEmail(e.target.value);
          setSubmitted(false);
      };
      const [apiname, setApiname] = useState(false);
      const [apiuser, setApiuser] = useState(false);
      const [apiimg, setApiimg] = useState(false);
      const [apiemail, setApiemail] = useState(false);
      const [apipassword, setApipassword] = useState(false);
      const [apicpassword, setApicpassword] = useState(false);
  
      const data = (
        {
          name: name,
          value: value,
          file: file,
          email: email,
          password: password,
          cpassword: cpassword
        }      
  );
  
      const handleSubmit = (e) => {
        
      const sendData = {
          name,
          value,
          file,
          email,
          password,
          cpassword
      }    
  
      name == '' && setApiname(true);
      value == '' && setApiuser(true);
      file == undefined && setApiimg(true);
      email == '' && setApiemail(true);
      password == '' && setApipassword(true);
      cpassword == '' && setApicpassword(true);
  
      name && handle1();
    };
      
  
    const navigation = useNavigate();
    const handle = () => {
      navigation('/Signin');
    };
  
    const handle1 = () => {
      alert("Signup successful");
      navigation('/Signin');
    };
    
  return (
    <>

<Main>
      <Text>Sign Up</Text>
      <SubText>Enter details to create your account</SubText>
      <Div>
          <PhnText>Your name</PhnText>
          <Input placeholder='Enter your name' onChange={handleName} value={name}></Input>
          <PhnText>User type</PhnText>
          <PDiv>
            <Input onClick={handleOpen}
            placeholder={value ? value : 'Select user type'}></Input>
            <div style={{marginLeft: "-100px", marginRight: "20px", marginTop: "10px"}} onClick={handleOpen}><CaretDownOutlined /></div>  
          </PDiv>
          {open ? (
            <Drop>
              <PhnText onClick={handleMenuOne}>Customer</PhnText>
              <PhnText onClick={handleMenuTwo}>photograper</PhnText>
            </Drop>
          ) : null}
          {apiuser && <Req>User type is required!</Req>}
          <PhnText>Profile picture</PhnText>
          <Input type="file" onChange={handleChange} />
            {file && <Img src={file} />}
            {apiimg && <Req>Profile is required!</Req>}
          <PhnText>E-mail or phone number</PhnText>
          <Input placeholder='Enter your E-mail or phone number' 
          onChange={handleEmail} value={email}></Input>
          {apiemail && <Req>Email is required!</Req>}
          <PDiv>
          <Divp>
            <PhnText>Password</PhnText>
            <PassDiv>
            <Input placeholder='Enter your password' 
            type={visible ? "text" : "password"}
            value={password} id='password' onChange={(e) => setPassword(e.target.value)}>
            </Input>
            <div style={{marginLeft: "-20px"}} onClick={() => setVisible(!visible)}>{ visible ? <EyeOutlined /> : <EyeInvisibleOutlined /> }</div>  
            </PassDiv>
          </Divp>
          
          <Divc>
            <PhnText>Confirm Password</PhnText>
            <PassDiv>
            <Input placeholder='Enter your password' 
            type={cvisible ? "text" : "password"}
            value={cpassword} id='password' onChange={(e) => setCpassword(e.target.value)}>
            </Input>
            <div style={{marginLeft: "-20px"}} onClick={() => setCvisible(!cvisible)}>{ cvisible ? <EyeOutlined /> : <EyeInvisibleOutlined /> }</div>  
            </PassDiv>
          </Divc>
          </PDiv>
          <PDiv>
          {apipassword && <Req>Password is required!</Req>}
          {apicpassword && <Req>Confirm password is required!</Req>}
          </PDiv>

      </Div>
      <Button title='Sign up' onClick={handleSubmit}/>
      {/* <BtnMain>
          <Logo src={LogoSrc}/>
          <BtnText>Sign up with Google</BtnText>
      </BtnMain> */}
      <AccDiv>
        <AccText>Already have an account?</AccText>
        <SignUp onClick={handle}>Sign in</SignUp>
      </AccDiv>
    </Main>
      
    </>
  )
}

export default UserReg
