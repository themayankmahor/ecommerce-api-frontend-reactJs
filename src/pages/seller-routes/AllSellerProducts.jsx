import React, { useContext, useEffect, useState } from 'react'
import Base from '../../components/Base'
import ShowAllProducts from '../../components/ShowAllProducts'
import { useParams } from 'react-router-dom'
import { getCurrentUserDetail } from '../../auth'
import userContext from '../../context/UserContext'

const AllSellerProducts = () => {
  const {categoryId} = useParams();
  // const { userCont } = useContext(userContext);

  const [user, setUser] = useState(null);

  const userContextData = useContext(userContext);

  useEffect(() => {

    setUser(getCurrentUserDetail());

  }, [])

  return (
    
    <>
      
      {userContextData?.user?.login && ( user ? 
      <Base>
        <ShowAllProducts categoryId={0} sellerId={user?.id} />
      </Base> : ''
      )}

    </>

    // <Base>
    //   <ShowAllProducts categoryId={0} sellerId={user?.id} />
    // </Base>

  )
}

export default AllSellerProducts