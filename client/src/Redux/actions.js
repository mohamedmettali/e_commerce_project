import { LOGIN, LOGOUT, REGISTER, GET_AUTH_USER, GET_PRODUCTS } from "./actionTypes";
import axios from "axios"

export const register = (newUser) => async (dispatch) => {
    try {
        const res = await axios.post("/users/register", newUser)
        dispatch({type: REGISTER, payload: res.data})
    } catch (err) {
        console.error(err)
    }
}

export const login = (formData) => async (dispatch) => {
    try{
        const res = await axios.post("/users/login", formData)
        dispatch({type: LOGIN, payload: res.data})
    } catch (err) {
        console.error(err)
    }
}

export const get_auth_user = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                autorisation: localStorage.getItem("token")
            }
        }
        const res = await axios.get("/users/isAuth", config)
        dispatch({type: GET_AUTH_USER, payload: res.data})
    } catch (err) {
        console.error(err)
    }
}

export const logout = () => (dispatch) => {
    dispatch({type: LOGOUT})
}

export const getProducts = () =>  (dispatch) => {
    axios.get("/products/getProducts")
    .then((res) => dispatch({type: GET_PRODUCTS, payload: res}))
    .catch((err)=> console.error(err))
    
     };
 
 export const addProduct = (newProduct) =>  (dispatch) => {
       axios.post("/products/addProduct", newProduct)
       .then((res) => dispatch(getProducts()))
       .catch((err)=> console.error(err))
       
        };
 
 export const deleteProduct = (idProduct) =>  (dispatch) => {
         axios.delete(`/products/deleteProduct/${idProduct}`)
         .then((res) => dispatch(getProducts()))
         .catch((err)=> console.error(err))
         
      };
 
 export const updateProduct = (idProduct, updatedProduct) =>  (dispatch) => {
       axios.put(`/products/updateProduct/${idProduct}`, updatedProduct)
       .then((res) => dispatch(getProducts()))
       .catch((err)=> console.error(err))
       
    };     