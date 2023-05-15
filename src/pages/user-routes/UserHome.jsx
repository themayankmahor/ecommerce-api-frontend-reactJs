import React, { useEffect, useState } from 'react'
import Base from '../../components/Base';
import { getCurrentUserDetail } from '../../auth';
import ProductByCategory from '../../components/ProductByCategory';

const UserHome = () => {

  const [user, setUser] = useState({});

  ///Use Effect
  useEffect(() => {

    console.log(getCurrentUserDetail());

    setUser(getCurrentUserDetail());

    //SHOW PRODUCTS

  }, [])

  return (
    
    <Base>
        <div>UserHome</div>

        <ProductByCategory pageSize={5} sortBy={"productId"} pageNumber={0} categoryId={1} sortDir={"asc"}/>
        
        <ProductByCategory pageSize={5} sortBy={"productId"} pageNumber={0} categoryId={2} sortDir={"asc"}/>

    </Base>

  )

}

export default UserHome;