import React from 'react'
import Base from '../components/Base'
import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Modal, Row } from 'reactstrap'

const Signup = () => {

  return (
    
    <Base>

        <Container>

          <Row>

            <Col sm={{size:6, offset:3}}>

                <Card color='dark' inverse className='mt-4'>

                  <CardHeader>
                    <h3 className='text-center'>Signup</h3>
                  </CardHeader>

                  <CardBody>

                    {/* Creating form for user */}
                    <Form>

                      {/* Name Field */}
                      <FormGroup>
                        <Label for='name'>Enter Name</Label>
                        <Input id='name' type='text' placeholder='Enter Name'/>
                      </FormGroup>
                      
                      {/* Email Field */}
                      <FormGroup>
                        <Label for='email'>Enter Email</Label>
                        <Input id='email' type='email' placeholder='Enter Email'/>
                      </FormGroup>

                                            
                      {/* Password Field */}
                      <FormGroup>
                        <Label for='password'>Enter Password</Label>
                        <Input id='password' type='password' placeholder='Enter Password'/>
                      </FormGroup>

                                            
                      {/* Name Field */}
                      <FormGroup>
                        <Label for='email'>Enter Email</Label>
                        <Input id='email' type='email' placeholder='Enter Email'/>
                      </FormGroup>


                    </Form>

                  </CardBody>

                </Card>
            
            </Col>
            
          </Row>

        </Container>

    </Base>

  )
  
}

export default Signup