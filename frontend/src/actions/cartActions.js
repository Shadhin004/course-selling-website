import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET } from "../constants/cartConstance";

import { USER_LOGOUT } from "../constants/userConstants";


export const addToCart = (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`http://127.0.0.1:8000/api/courses/${id}`)

    dispatch({
        type:CART_ADD_ITEM,
        payload: {
            course: data._id,
            name:data.name,
            image:data.image,
            price:data.salePrice,
            instructorName:data.instructorName,
             
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))


}



export const removeFromCart = (id)=> (dispatch, getState) =>{

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

