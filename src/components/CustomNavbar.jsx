import React, { useState } from 'react'
import { BrowserRouter, NavLink as RouteLink } from 'react-router-dom';
import { 

    Collapse, 
    DropdownItem, 
    DropdownMenu, 
    DropdownToggle, 
    Nav, 
    NavItem, 
    NavLink, 
    NavbarBrand, 
    NavbarText, 
    NavbarToggler, 
    UncontrolledDropdown,
    Navbar
    
} from 'reactstrap';
import AuthModal from './AuthModal';

const CustomNavbar = () => {


    ///toggle is open or not
    const [isOpen, setIsOpen] = useState(false);

    ///check login
    const [login, setLogin] = useState(false);

    ///is modal open
    const [modalOpen, setModalOpen] = useState(false);

    ///open login/signup modal
    const toggleModal = () => setModalOpen(!modalOpen);

    ///toggle navbar
    const toggle = () => setIsOpen(!isOpen);


  return (
    
    //Navbar
    <div>
    <Navbar
        color="dark"
        dark
        expand="md"
        fixed=""
        className='px-5'  //here in px, x is x-axis (Left, Right)
    >
      <NavbarBrand tag={RouteLink} to='/'>Order It</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>

        {/* Left Nav */}
        <Nav className="me-auto" navbar>

            {/* Home */}
            <NavItem>
                <NavLink tag={RouteLink} to='/'>Home</NavLink>
            </NavItem>


          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

                {/* right Nav */}
                <Nav navbar>

                  {/* render if user is login */}
                  {
                    login && (

                      <>

                        {/* Profile */}
                        <NavItem>
                            <NavLink tag={RouteLink} to='/profile-info' >Profile Info</NavLink>
                        </NavItem>

                        {/* User name */}
                        {/* <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                            </NavLink>
                        </NavItem> */}

                        
                        {/* Logout */}
                        <NavItem>
                            <NavLink href="/components/">Logout</NavLink>
                        </NavItem>

                      </>

                    )
                  }

                  {/* render if user is not logged in */}

                  {
                    !login && (
                      <>
                        {/* Login */}
                        <NavItem>
                            <NavLink onClick={toggleModal}>Login/Signup</NavLink>
                        </NavItem>

                        {/* User name */}
                        {/* <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                            </NavLink>
                        </NavItem> */}

                        
                        {/* Signup */}
                        {/* <NavItem>
                            <NavLink onClick={modalToggle} >Signup</NavLink>
                        </NavItem> */}
                      </>
                    )
                  }
            </Nav>
        </Collapse>

        <AuthModal isOpen={modalOpen} toggle={toggleModal} />
        </Navbar>
    </div>
  )
}

export default CustomNavbar;