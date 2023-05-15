import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/product-services';
import { Col, Row } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Product from './Product';

const ShowAllProducts = ({ pageSize = 5, sortBy = "productId", pageNumber = 0, categoryId = 1, sortDir = "asc", sellerId}) => {
    

    const [productContent, setProductContent] = useState({
        content: [],
        totalPage: '',
        totalElements: '',
        pageSize: '',
        lastPage: false,
        pageNumber: ''
    });

    const [currentPage, setCurrentPage] = useState(pageNumber);

    const changePage = (pageNumber = 0, pageSize = 0) => {
        if (pageNumber > productContent.pageNumber && productContent.lastPage) {
            return;
        }

        if (pageNumber < productContent.pageNumber && productContent.pageNumber === 0) {
            return;
        }

        getAllProducts(pageSize, sortBy, pageNumber, categoryId, sortDir, sellerId).then(data => {
            console.log(data);
            setProductContent({
                content: [...productContent.content, ...data.products],
                totalPage: data.totalPage,
                totalElements: data.totalElements,
                pageSize: data.pageSize,
                lastPage: data.lastPage,
                pageNumber: data.pageNumber
            });

            console.log("TOTAL ELEMENT" + productContent.content);

        }).catch(error => {
            console.log(error);
            console.log("Error in loading products");
        });
    };

    const changePageInfinite = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        changePage(currentPage, pageSize);
    }, [currentPage, pageSize]);

    return (

        <div className='container-fluid'>

            <Row>
                <Col>
                    <h1>All Products ({productContent?.totalElements})</h1>
                    {console.log(productContent?.totalElements)}
                    <InfiniteScroll
                        dataLength={productContent.content.length}
                        next={changePageInfinite}
                        hasMore={!productContent.lastPage}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >

                        {
                            productContent.content.map((product) => (
                                <Product product={product} key={product.productId} />
                            ))
                        }

                    </InfiniteScroll>
                </Col>
            </Row>

        </div>

    );
};

export default ShowAllProducts;