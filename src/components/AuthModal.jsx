import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Login = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {/* Email */}
      <FormGroup>
        <Label for='email'>Email</Label>
        <Input type='email' name='email' id='email' />
      </FormGroup>

      {/* Password */}
      <FormGroup>
        <Label for='password'>Password</Label>
        <Input type='password' name='password' id='password' />
      </FormGroup>

    </Form>
  );
};

const Signup = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {/* First Name */}
      <FormGroup>
        <Label for='firstName'>First Name</Label>
        <Input type='text' name='firstName' id='firstName' />
      </FormGroup>

      {/* Last Name */}
      <FormGroup>
        <Label for='lastName'>Last Name</Label>
        <Input type='text' name='lastName' id='lastName' />
      </FormGroup>

      {/* Email */}
      <FormGroup>
        <Label for='email'>Email</Label>
        <Input type='email' name='email' id='email' />
      </FormGroup>

      {/* Password */}
      <FormGroup>
        <Label for='password'>Password</Label>
        <Input type='password' name='password' id='password' />
      </FormGroup>

    </Form>
  );
};

const AuthModal = ({ isOpen, toggle }) => {
    //
  const navigate = useNavigate();

  const [showSignUp, setShowSignUp] = useState(false);

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
    //
    useEffect(() => {

        console.log(data);

    }, [data])

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // login logic
        // navigate to home page after successful login
        navigate('/');
    };

  const toggleSignup = () => {
    setShowSignUp(!showSignUp);
  };



  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // signup logic
    // navigate to home page after successful signup
    navigate('/');
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
          <Signup handleSubmit={handleSignupSubmit} />
        ) : (
          <Login handleSubmit={handleLoginSubmit} />
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