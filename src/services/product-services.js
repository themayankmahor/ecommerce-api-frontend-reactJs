import { myAxios } from "./Helper"

export const getAllProducts = (pageSize, sortBy, pageNumber, categoryId, sortDir) =>
{
    return myAxios.get(`/products/all-products?pageSize=${pageSize}&sortBy=${sortBy}&pageNumber=${pageNumber}&categoryId=${categoryId}&sortDir=${sortDir}`).then((response) => response.data);
}