import React, { useEffect } from "react"
import Base from "../components/Base";
import { toast } from "react-toastify";
import ProductByCategory from "../components/ProductByCategory";

const Home = () =>
{

    return(

        <Base>

            <div className="container">

                <div className="text-center">
                <h1>This is Home page</h1>
                </div>
                
            </div>

            <ProductByCategory pageSize={5} sortBy={"productId"} pageNumber={0} categoryId={1} sortDir={"asc"}/>
            
        </Base>
    )
}

export default Home;