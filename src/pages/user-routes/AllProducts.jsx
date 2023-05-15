import React from 'react'
import Base from '../../components/Base'
import ShowAllProducts from '../../components/ShowAllProducts'
import { useParams } from 'react-router-dom'

const AllProducts = () => 
{
  const {categoryId} = useParams();

  return (
    <Base>

        <ShowAllProducts categoryId={categoryId}/>

    </Base>
  )
}

export default AllProducts