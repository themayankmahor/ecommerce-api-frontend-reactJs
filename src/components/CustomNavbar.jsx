import React, { useContext, useEffect, useState } from 'react'
import { NavLink as RouteLink, useNavigate } from 'react-router-dom';
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
    Navbar,
    PopoverItem,
    Popover,
    PopoverHeader,
    PopoverBody,
    Button
    
} from 'reactstrap';
import AuthModal from './AuthModal';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import userContext from '../context/UserContext';

const CustomNavbar = () => {

    ///
    const userContextData = useContext(userContext);

    ///
    const navigate = useNavigate();

    ///toggle is open or not
    const [isOpen, setIsOpen] = useState(false);

    ///check login
    const [login, setLogin] = useState(false);

    const [user, setUser] = useState(undefined);

    ///is modal open
    const [modalOpen, setModalOpen] = useState(false);

    const [popoverOpen, setPopoverOpen] = useState(false);

    const togglePopover = () => setPopoverOpen(!popoverOpen);

    ///open login/signup modal
    const toggleModal = () => setModalOpen(!modalOpen);

    ///toggle navbar
    const toggle = () => setIsOpen(!isOpen);

    ///Logout Button Handler
    const logout = () =>
    {
      doLogout(() => {
        //logged out
        setLogin(false);

        //
        userContextData.setUser({
          data:null,
          login:false
        })

        //
        navigate('/');
      })
    }

    //use Effect
    useEffect(() => {
      setLogin(isLoggedIn);
      setUser(getCurrentUserDetail());
      
    }, [])


  return (
    
    //Navbar
    <div>
      {/* {console.log(user.roles[0].name)} */}
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
            {!login && <NavLink tag={RouteLink} to={'/'}>Home</NavLink>}
              {login && (
                <>
                  {user.roles[0].name === 'ROLE_NORMAL' && (
                    <NavLink tag={RouteLink} to={'/user/home'}>
                      Home
                    </NavLink>
                  )}
                  {/* {user.roles[0].name === 'ROLE_SELLER' && (
                    <NavLink tag={RouteLink} to={'/seller/home'}>
                      Home
                    </NavLink>
                  )} */}
                </>
              )}
                
            </NavItem>

            {
              login && (
                <>
                    {user.roles[0].name === 'ROLE_SELLER' && (
                      <>
                    <NavLink tag={RouteLink} to={'/seller/all-products'}>
                      All Products
                    </NavLink>
                    <NavLink tag={RouteLink} to={'/seller/add-products'}>
                      Add Products
                    </NavLink>
                    </>
                  )}
                </>
              )
            }


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

                        <NavItem>
                        <NavLink href="#" id="Popover1" onClick={togglePopover}>Cart</NavLink>
                        <Popover flip
                          placement="bottom"
                           isOpen={popoverOpen} 
                           target="Popover1" 
                           toggle={togglePopover}>
                          <PopoverHeader>Your Cart</PopoverHeader>
                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                        </Popover>
                        </NavItem>

                        
                        {/* Logout */}
                        <NavItem>
                            <NavLink onClick={logout}>Logout</NavLink>
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