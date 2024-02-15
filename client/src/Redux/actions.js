import { LOGIN, LOGOUT, REGISTER, GET_AUTH_USER, GET_PRODUCTS, SET_USER_IMAGE, GET_PRODUCTS_ByID } from "./actionTypes";
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
    
   
    export const fetchUserImage = (productId) => async (dispatch) => {
        try {
          const response = await axios.get(`/images/${productId}`);
          const imageURL = response.data.imageURL;
          dispatch({ type: SET_USER_IMAGE, payload: imageURL });
        } catch (error) {
          console.error('Error fetching user image:', error);
        }
      };

      export const getProduct = (idProduct) =>  (dispatch) => {
        axios.get(`/products/getProducts/${idProduct}`)
        .then((res) => dispatch({type: GET_PRODUCTS_ByID, payload: res}))
        .catch((err)=> console.error(err))
        
         };