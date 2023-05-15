import React, { useContext, useEffect, useState } from 'react';
import userContext from '../context/UserContext';
import { getCurrentUserDetail } from '../auth';
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/Helper';

const Product = ({ product = { productId: -1, productName: "This is default name", price: "Pricee" } }) => {

    const userContextData = useContext(userContext);

    const [user, setUser] = useState(undefined);
    const [login, setLogin] = useState(null);

    useEffect(() => {

        setUser(getCurrentUserDetail());

    }, []);

    console.log(userContextData.user.data.id);

    return (

        <Card className='border-0 shadow-sm mt-3'>
            <Row>
                <Col xs={2}>
                    <CardImg style={{width:'150px', height:'150px'}} src={`${BASE_URL}/products/image/${product.imageName}`} alt="" />
                </Col>
                <Col xs={10}>
                    <CardBody>
                        <h3>{product.productName}</h3>
                        <h6>Rs. {product.price}</h6>


  

                            {userContextData.user.login && (userContextData.user.data.roles[0].name === 'ROLE_NORMAL' ? 
                            <>
                            <Button className='btn-success' style={{marginRight:6}}>Add</Button> 
                            <Button className='btn-warning'>Buy Now</Button>
                            </>
                            : '' )}

                            {userContextData.user.login && (userContextData.user.data.roles[0].name === 'ROLE_SELLER' ? 
                            <>
                            <Button className='btn-warning' style={{marginRight:6}}>Update</Button> 
                            <Button className='btn-danger'>Delete</Button>
                            </>
                            : '' )}
                        
                        
                    </CardBody>
                </Col>
            </Row>
        </Card>

    );
};

export default Product;