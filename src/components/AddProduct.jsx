import React, { useContext, useEffect, useState } from 'react'
import { Input, Label } from 'reactstrap'
import { getCurrentUserDetail } from '../auth';
import { loadAllCategories } from '../services/category-service';
import userContext from '../context/UserContext';
import AddBook from './AddBook';
import AddPhone from './AddPhone';

const AddProduct = () => {

    //get categories
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    //get user
    const [user, setUser] = useState([]);

    //user context
    const userContextData = useContext(userContext);


    //Use Effect
    useEffect(() => {

        //
        setUser(getCurrentUserDetail());

        

        //
        loadAllCategories().then((data) => {

            setCategories(data);

        }).catch(error => {
            console.log(error);
        })

    }, [])

    //handle category change
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    //render product form
    const renderProductForm = () => {

        //
        if (category === 'Book')
        {
            return <AddBook />
        }
        else if (category === 'Phone')
        {
            return <AddPhone />
        }
        else
        {
            return null;
        }
    }

  return (
    
    <div className="my-3">

        {
        
        <div className='text-center'>
        <Label for="category"><h3>Product Category</h3></Label>
        <Input type="select" id="category" placeholder="Content" name="categoryId"
        onChange={handleCategoryChange}
        defaultValue={0}
        >
            <option disabled value={0}>--Select Category--</option>
            {/* Printing category data dynamically */}

            {
                categories.map((category) => (
                    <option value={category.categoryTitle} key={category.categoryId}>{category.categoryTitle}</option>
                ))
            }

        </Input>
        
        </div>
        
        }

        {renderProductForm()}

        {/* {userContextData.user.login && (user.roles[0].name === 'ROLE_SELLER' ? <AddBook/>: '')}
        {userContextData.user.login && (user.roles[0].name === 'ROLE_SELLER' ? <AddPhone/>: '')} */}

    </div>

    
  )

}

export default AddProduct