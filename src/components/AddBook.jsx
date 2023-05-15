import React from 'react'

const AddBook = () => {
  return (
    
    <div className="wrapper">

    <Card className="shadow-sm mt-2">
        <CardBody>
        
            <h3>Add Book</h3>

            <Form >
                {/* Book Name */}
                <div className="my-3">
                    <Label for="bookName">Book Name</Label>
                    <Input type="text" id="bookName" name="bookName" placeholder="Enter Book Name"/>
                </div>

                {/* Author Name */}
                <div className="my-3">
                    <Label for="authorName">Author Name</Label>
                    <Input type="text" id="authorName" name="authorName" placeholder="Enter Author Name"/>
                </div>

                {/* Price */}
                <div className="my-3">
                    <Label for="price">Price</Label>
                    <Input type="number" id="price" name="price" placeholder="Enter Price"/>
                </div>

                {/* Genres */}
                <div className="my-3">
                    <Label for="genres">Genres</Label>
                    <Input type="text" id="genres" name="genres" placeholder="Enter Genres"/>
                </div>

                {/* Image */}
                <div>
                    <Input id="image" type="file" onChange={handleImageChange}/>
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