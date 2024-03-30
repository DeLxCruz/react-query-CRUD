import axios from "axios";

const productsApi = axios.create({
    baseURL: 'http://localhost:3001'

})

export const getProducts = async () => {
    const response = await productsApi.get('/products')
    console.log("DATA", response )
    return response.data
}
