import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'
import { getCurrentUserDetail } from '../auth';
import { toast } from 'react-toastify';
import { doCreatePhone, getProductByName, uploadProductImage } from '../services/product-services';

const AddPhone = () => {

    //user
    const [user, setUser] = useState(null);
    
    //set Image
    const [image, setImage] = useState(null);

    //phone
    const [phone, setPhone] = useState({

        phoneName:'',
        brandName:'',
        price:'',
        ram:'',
        rom:'',
        camera:''

    });

    //create phone
    const createPhone = (event) => {
        event.preventDefault();

        //
        if (phone.phoneName.trim() === '')
        {
            toast.error("Phone Name is Required !!");
            return;
        }

        if (phone.brandName.trim() === '')
        {
            toast.error("Brand Name is Required !!");
            return;
        }

        if (phone.price.trim() === '')
        {
            toast.error("Phone price is Required !!");
            return;
        }

        if (phone.ram.trim() === '')
        {
            toast.error("Ram is Required !!");
            return;
        }

        if (phone.rom.trim() === '')
        {
            toast.error("Rom is Required !!");
            return;
        }

        if (phone.camera.trim() === '')
        {
            toast.error("Camera detail is Required !!");
            return;
        }

        //do create phone
        doCreatePhone(user.id, phone).then(response => {

            //get product by Id
            getProductByName(response.phoneName).then(data => {

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

                setPhone({
                    phoneName:'',
                    brandName:'',
                    price:'',
                    ram:'',
                    rom:'',
                    camera:''
                })

        }).catch(error => {
            console.log(error);
            toast.error("Something went wrong on servers !!");
        })

    }

    ///Handle Image change
    const handleImageChange = (event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
    }

    //field change handler
    const fieldChangeHandler = (event) => {

        setPhone({...phone, [event.target.name] : event.target.value});

    }

    //


    //use effect
    useEffect(() => {

        console.log(phone);
        setUser(getCurrentUserDetail());

    }, [phone])


  return (

    <div className="wrapper">

    <Card className="shadow-sm mt-2">
        <CardBody>
        
            <h3 className='text-center'>Add Phone</h3>

            <Form onSubmit={createPhone}>
                {/* Phone Name */}
                <div className="my-3">
                    <Label for="phoneName">Phone Name</Label>
                    <Input type="text" id="phoneName" name="phoneName" placeholder="Enter Phone Name"
                    onChange={fieldChangeHandler}
                    value={phone.phoneName}
                    />
                </div>

                {/* Brand Name */}
                <div className="my-3">
                    <Label for="brandName">Brand Name</Label>
                    <Input type="text" id="brandName" name="brandName" placeholder="Enter Brand Name"
                    onChange={fieldChangeHandler}
                    value={phone.brandName}
                    />
                </div>

                {/* Price */}
                <div className="my-3">
                    <Label for="price">Price</Label>
                    <Input type="number" id="price" name="price" placeholder="Enter Price"
                    onChange={fieldChangeHandler}
                    value={phone.price}
                    />
                </div>

                {/* Ram */}
                <div className="my-3">
                    <Label for="ram">Ram</Label>
                    <Input type="number" id="ram" name="ram" placeholder="Enter Ram"
                    onChange={fieldChangeHandler}
                    value={phone.ram}
                    />
                </div>

                {/* Rom */}
                <div className="my-3">
                    <Label for="rom">Rom</Label>
                    <Input type="number" id="rom" name="rom" placeholder="Enter Rom"
                    onChange={fieldChangeHandler}
                    value={phone.rom}
                    />
                </div>

                {/* Camera */}
                <div className="my-3">
                    <Label for="camera">Camera</Label>
                    <Input type="number" id="camera" name="camera" placeholder="Enter Camera"
                    onChange={fieldChangeHandler}
                    value={phone.camera}
                    />
                </div>

                {/* Image */}
                <div>
                    <Input id="image" type="file"
                    required
                    onChange={handleImageChange}
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

export default AddPhone