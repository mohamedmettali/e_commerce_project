import { LOGIN, LOGOUT, REGISTER, GET_AUTH_USER, GET_PRODUCTS } from "./actionTypes"

const initialState = {
    user: null,
    msg: null,
    token: localStorage.getItem("token"),
    products: [],
}

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case REGISTER:
            localStorage.setItem("token", action.payload.token)
            return {...state, user: action.payload.newUser, msg: action.payload.msg, token: action.payload.token}
        case LOGIN:
            localStorage.setItem("token", action.payload.token)
            return {...state, user: action.payload.user, msg: action.payload.msg, token: action.payload.token}
        case LOGOUT:
            localStorage.removeItem("token")
            return {...state, user: null, msg: null}
        case  GET_AUTH_USER: 
            return {...state, user: action.payload.user}
        case GET_PRODUCTS: 
            return {...state, products:action.payload}
        default:
            return state
    }

}

export default reducer