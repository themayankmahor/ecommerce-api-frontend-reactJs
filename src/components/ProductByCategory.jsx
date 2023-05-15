import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, CardTitle, Col, Row } from 'reactstrap'
import { getAllProducts } from '../services/product-services';
import { BASE_URL } from '../services/Helper';
import userContext from '../context/UserContext';
import { getCurrentUserDetail } from '../auth';
import { NavLink as RouteLink } from 'react-router-dom';

const ProductByCategory = ({pageSize, sortBy, pageNumber, categoryId, sortDir, sellerId = 0}) => {

    //
    const userContextData = useContext(userContext);

    const [user, setUser] = useState(null);

    //
    const [products, setProducts] = useState([]);

    //use effect
    useEffect(() => {
        
        setUser(getCurrentUserDetail());

        getAllProducts(pageSize, sortBy, pageNumber, categoryId, sortDir, sellerId).then((response) => {
            console.log(response);
            console.log(response.products);

            setProducts(response);
        })

    }, [])

  return (
    
    <Card>
    <CardBody>
    <Row>
        <Col>
            <Card>
                {/* <CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="Card image cap"/> */}

                <CardBody className='text-center'>
                    <CardTitle>View All</CardTitle>
                    
                    <Button className='btn-primary' tag={RouteLink} to={`/user/all-products/${categoryId}`}>View All Products</Button>
                </CardBody>
            </Card>
        </Col>

        {
            products.products?.map(product => (

                <Col key={product.productId}>
                    <Card>
                        <CardImg className='text-center' style={{width:'120px', height:'120px', alignSelf:"center"}} src={`${BASE_URL}/products/image/${product.imageName}`} alt=""/>
                        <CardBody className='text-center'>
                            <CardTitle><h5><b>{product.productName}</b></h5></CardTitle>
                            <CardTitle>Rs. {product.price}</CardTitle>
                        </CardBody>


                        {
                        userContextData.user.login && (
                            <>
                                {user.roles[0].name === 'ROLE_NORMAL' &&(

                                <CardFooter className='text-center'>

                                    <Button className='btn-success'>Add</Button>

                                </CardFooter>

                                )}
                            </>
                        )
                        }


            
                    </Card>
                </Col>

            ))
        }
    </Row>
    </CardBody>
    </Card>
  )
}

export default ProductByCategory