import axios from "axios";

const productsApi = axios.create({
    baseURL: 'http://localhost:3001/products'

})

export const getProducts = async () => {
    const response = await productsApi.get('/')
    console.log("DATA", response )
    return response.data
}

export const createProduct = (product) => productsApi.post('/', product);

export const deleteProduct = (id) => productsApi.delete(`/${id}`);
