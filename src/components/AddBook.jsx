import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'
import { doCreateBook, getProductByName, uploadProductImage } from '../services/product-services';
import { getCurrentUserDetail } from '../auth';

const AddBook = () => {

    //
    const [user, setUser] = useState(null);

    //book
    const [book, setBook] = useState({
        bookName:'',
        authorName:'',
        price:'',
        genres:''
    })

    //set Image
    const [image, setImage] = useState(null);

    //field changed handler
    const fieldChange = (event) => {

        //
        setBook({...book, [event.target.name] : event.target.value})
    }

    //create book
    const createBook = (event) => {

        event.preventDefault();

        //
        if (book.bookName.trim() === '')
        {
            toast.error("Book Name is Required !!");
            return;
        }

        //
        if (book.authorName.trim() === '')
        {
            toast.error("Author Name is Required !!");
            return;
        }

        //
        if (book.price.trim() === '')
        {
            toast.error("Add Price !!");
            return;
        }

        //
        if (book.genres.trim() === '')
        {
            toast.error("Genres is Required !!");
            return;
        }

        //submit the form to server
        doCreateBook(user.id, book).then(response => {
            
            console.log("REsponse" + response.bookName);

            //get product by Id
            getProductByName(response.bookName).then(data => {

                console.log("PRODUCT ID " + data.productId);

                //upload image
                uploadProductImage(image, data.productId).then(imageData => {
                    toast.success("Image Uploaded");
                }).catch(error => {
                    console.log(error);
                })

            }).then(error => {
                console.log(error);
            })



            //
            toast.success("Product Added...");

            //
            setBook({

                bookName:'',
                authorName:'',
                price:'',
                genres:''
            })

        }).catch(error => {
            toast.error("Something went wrong on servers !!");
            console.log(error);
        })

    }

    ///Handle Image change
    const handleImageChange = (event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
    }

    ///Use Effect
    useEffect(() => {
        
        //console.log(book);
        setUser(getCurrentUserDetail());

    }, [book])

  return (
    
    <div className="wrapper">

    <Card className="shadow-sm mt-2">
        <CardBody>
        
            <h3 className='text-center'>Add Book</h3>

            <Form onSubmit={createBook}>
                {/* Book Name */}
                <div className="my-3">
                    <Label for="bookName">Book Name</Label>
                    <Input type="text" id="bookName" name="bookName" placeholder="Enter Book Name"
                    onChange={fieldChange}
                    value={book.bookName}
                    />
                </div>

                {/* Author Name */}
                <div className="my-3">
                    <Label for="authorName">Author Name</Label>
                    <Input type="text" id="authorName" name="authorName" placeholder="Enter Author Name"
                    onChange={fieldChange}
                    value={book.authorName}
                    />
                </div>

                {/* Price */}
                <div className="my-3">
                    <Label for="price">Price</Label>
                    <Input type="number" id="price" name="price" placeholder="Enter Price"
                    onChange={fieldChange}
                    value={book.price}
                    />
                </div>

                {/* Genres */}
                <div className="my-3">
                    <Label for="genres">Genres</Label>
                    <Input type="text" id="genres" name="genres" placeholder="Enter Genres"
                    onChange={fieldChange}
                    value={book.genres}
                    />
                </div>

                {/* Image */}
                <div>
                    <Input id="image" type="file"
                    onChange={handleImageChange}
                    required
                    />
                </div>

                {/* Button */}
                <Container className="text-center  mt-3">
                    <Button type="submit" color="primary" className="rounded-0">Create</Button>
                    <Button color="danger" className="rounded-0 ms-2">Reset</Button>
                </Container>

            </Form>

            

        </CardBody>
    </Card>

    </div>

  )
}

export default AddBook