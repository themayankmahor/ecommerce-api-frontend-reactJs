import { myAxios } from "./Helper"

//get all products
export const getAllProducts = (pageSize, sortBy, pageNumber, categoryId, sortDir, sellerId=0) =>
{
    return myAxios.get(`/products/all-products?pageSize=${pageSize}&sortBy=${sortBy}&pageNumber=${pageNumber}&categoryId=${categoryId}&sortDir=${sortDir}&sellerId=${sellerId}`).then((response) => response.data);
}