import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { loginUser, signup } from '../services/user-service';
import { toast } from 'react-toastify';
import { doLogin } from '../auth';
import userContext from '../context/UserContext';

const AuthModal = ({ isOpen, toggle }) => {

  //
  const userContextData = useContext(userContext);

  //
  const navigate = useNavigate();

  const [showSignUp, setShowSignUp] = useState(false);

  ///handle change SIGNUP
  const handleChange = (event, property) =>
  {
    setData({...data, [property]:event.target.value})
  }

  ///handle change LOGIN
  const handleChangeLogin = (event, property) =>
  {
    let actualValue = event.target.value;

    setLoginDetail({
      ...loginDetail,
      [property] : actualValue
    })
  }

  ///////////Signup set User data///////////
  const [data, setData] = useState(
        {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    )

    //
    const [error, setError] = useState(
        {
            errors:{},
            isError:false
        }
    )

    const handleSignupSubmit = (event) => {
      event.preventDefault();
      // signup logic
      signup(data).then((response) => {

          console.log(response);
          console.log("SUCCESS");

          toast.success("User is Registered Successfully !! ");

          setData(
            {
              firstName:'',
              lastName:'',
              email:'',
              password:''
            }
          )

      }).catch((error) => {
        console.log(error);

        setError(
          {
            errors:error,
            isError:true
          }
        )

        toast.error(error.response?.data?.message);
      })

    };

    //
    useEffect(() => {

        console.log(data);

    }, [data])

    //////LOGIN

    const [loginDetail, setLoginDetail] = useState(
      {
        username : '',
        password: ''
      }
    )

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // login logic

        //validation
        if (loginDetail.username.trim() == '' || loginDetail.password.trim() == '')
        {
          toast.error("Username or Password is Required !!");
        }

        //submit the data to server to generate JWT (token)
        loginUser(loginDetail).then((data) => {
          console.log(data);

          //save the data to localStorage
          doLogin(data, () => {
            console.log("Login detail is saved to localStorage");

            //redirect to your dashboard page
            userContextData.setUser({
              data:data.user,
              login:true
            });

            navigate('/user/home');
            
          })

        }).catch((error) => {
          console.log(error);
        })
    };

  const toggleSignup = () => {
    setShowSignUp(!showSignUp);
  };


  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      {/* Header */}
      <ModalHeader toggle={toggle}>
        {showSignUp ? 'Sign Up' : 'Login'}
      </ModalHeader>

      {/* Body */}
      <ModalBody>
        {/* Login and Signup form */}
        {showSignUp ? (
          //<Signup handleSubmit={handleSignupSubmit} />

          ////Signup form
          <Form onSubmit={handleSignupSubmit}>
          {/* First Name */}
          <FormGroup>
            <Label for='firstName'>First Name</Label>
            <Input type='text' name='firstName' id='firstName' 
            onChange={(e) => handleChange(e, 'firstName')}
            value={data.firstName}
            />
          </FormGroup>
    
          {/* Last Name */}
          <FormGroup>
            <Label for='lastName'>Last Name</Label>
            <Input type='text' name='lastName' id='lastName' 
            onChange={(e) => handleChange(e, 'lastName')}
            value={data.lastName}
            />
          </FormGroup>
    
          {/* Email */}
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' name='email' id='email' 
            onChange={(e) => handleChange(e, 'email')}
            value={data.email}
            />
          </FormGroup>
    
          {/* Password */}
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' 
            onChange={(e) => handleChange(e, 'password')}
            value={data.password}
            />
          </FormGroup>
    
        </Form>
          
        ) : (
          // <Login handleSubmit={handleLoginSubmit} />

          ///Login Form
          <Form onSubmit={handleLoginSubmit}>
          {/* Email */}
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' name='email' id='email' 
            onChange={(e) => handleChangeLogin(e, 'username')}
            value={loginDetail.username}
            />
          </FormGroup>
    
          {/* Password */}
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' 
            onChange={(e) => handleChangeLogin(e, 'password')}
            value={loginDetail.password}
            />
          </FormGroup>
    
        </Form>
        )}
      </ModalBody>

      {/* Footer */}
      <ModalFooter>
        {/* Button for login and signup */}
        <Button
          color='primary'
          onClick={showSignUp ? handleSignupSubmit : handleLoginSubmit}
        >
          {showSignUp ? 'Sign Up' : 'Login'}
        </Button>

        {/* Cancel button */}
        <Button color='secondary' onClick={toggle}>
          Cancel
        </Button>

        {/* Sign up or Login link */}
        {!showSignUp ? (
          <Button color='link' onClick={toggleSignup}>
            Don't have an account? Sign up now
          </Button>
        ) : (
          <Button color='link' onClick={toggleSignup}>
            Already have an account? Login now
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default AuthModal;