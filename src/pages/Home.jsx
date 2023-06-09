import React, { useEffect } from "react"
import Base from "../components/Base";
import { toast } from "react-toastify";
import ProductByCategory from "../components/ProductByCategory";

const Home = () =>
{

    return(

        <Base>

            <div className="container">
                
            </div>

            <ProductByCategory pageSize={5} sortBy={"productId"} pageNumber={0} categoryId={1} sortDir={"asc"}/>
            
            <ProductByCategory pageSize={5} sortBy={"productId"} pageNumber={0} categoryId={2} sortDir={"asc"}/>
        </Base>
    )
}

export default Home;