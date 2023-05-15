import { myAxios, privateAxios } from "./Helper"

//get all products
export const getAllProducts = (pageSize, sortBy, pageNumber, categoryId, sortDir, sellerId=0) =>
{
    return myAxios.get(`/products/all-products?pageSize=${pageSize}&sortBy=${sortBy}&pageNumber=${pageNumber}&categoryId=${categoryId}&sortDir=${sortDir}&sellerId=${sellerId}`).then((response) => response.data);
}

//do create post (BOOK)
export const doCreateBook = (sellerId, bookData) => {
    return privateAxios.post(`/seller/${sellerId}/add-book`, bookData).then((response) => response.data);
}

//do create post (BOOK)
export const doCreatePhone = (sellerId, phoneData) => {
    return privateAxios.post(`/seller/${sellerId}/add-phone`, phoneData).then((response) => response.data);
}

//upload product Image
export const uploadProductImage = (image, productId) => {

    let formData = new FormData();
    formData.append("image", image);
    
    return privateAxios.post(`/products/image/upload/${productId}`, formData, {
        headers:{
            'Content-Type' : 'multipart/form-data'
        }
    }).then((response) => response.data)

}

//get product by name
export const getProductByName = (productName) => {

    return myAxios.get(`/products/getByName/${productName}`).then(response => response.data);

}