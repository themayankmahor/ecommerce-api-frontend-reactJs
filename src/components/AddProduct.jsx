import React, { useContext, useEffect, useState } from 'react'
import { Input, Label } from 'reactstrap'
import { getCurrentUserDetail } from '../auth';
import { loadAllCategories } from '../services/category-service';
import userContext from '../context/UserContext';

const AddProduct = () => {

    //get categories
    const [categories, setCategories] = useState([]);

    //get user
    const [user, setUser] = useState([]);

    //user context
    const userContextData = useContext(userContext);

    useEffect(() => {

        //
        setUser(getCurrentUserDetail());

        //
        loadAllCategories().then((data) => {

            setCategories(data);

        }).catch(error => {
            console.log(error);
        })

    }, [categories])

  return (
    
    <div className="my-3 text-center">

        {
        
        <>
        <Label for="category"><h3>Product Category</h3></Label>
        <Input type="select" id="category" placeholder="Content" name="categoryId"
        // onChange={fieldChanged}
        defaultValue={0}
        >
            <option disabled value={0}>--Select Category--</option>
            {/* Printing category data dynamically */}

            {
                categories.map((category) => (
                    <option value={category.categoryId} key={category.categoryId}>{category.categoryTitle}</option>
                ))
            }

        </Input>
        </>
        
        }

    </div>

    
  )

}

export default AddProduct