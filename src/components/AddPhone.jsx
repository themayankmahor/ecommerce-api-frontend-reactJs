import React from 'react'

const AddPhone = () => {
  return (

    <div className="wrapper">

    <Card className="shadow-sm mt-2">
        <CardBody>
        
            <h3>Add Phone</h3>

            <Form >
                {/* Phone Name */}
                <div className="my-3">
                    <Label for="phoneName">Phone Name</Label>
                    <Input type="text" id="phoneName" name="phoneName" placeholder="Enter Phone Name"/>
                </div>

                {/* Brand Name */}
                <div className="my-3">
                    <Label for="brandName">Brand Name</Label>
                    <Input type="text" id="brandName" name="brandName" placeholder="Enter Brand Name"/>
                </div>

                {/* Price */}
                <div className="my-3">
                    <Label for="price">Price</Label>
                    <Input type="number" id="price" name="price" placeholder="Enter Price"/>
                </div>

                {/* Ram */}
                <div className="my-3">
                    <Label for="ram">Ram</Label>
                    <Input type="number" id="ram" name="ram" placeholder="Enter Ram"/>
                </div>

                {/* Rom */}
                <div className="my-3">
                    <Label for="rom">Rom</Label>
                    <Input type="number" id="rom" name="rom" placeholder="Enter Rom"/>
                </div>

                {/* Camera */}
                <div className="my-3">
                    <Label for="camera">Camera</Label>
                    <Input type="number" id="camera" name="camera" placeholder="Enter Camera"/>
                </div>

                {/* Image */}
                <div>
                    <Input id="image" type="file"/>
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