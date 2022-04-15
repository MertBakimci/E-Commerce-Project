import axios from "axios";
import { GET_CATEGORIES, GET_PRODUCTS } from "../types";
const ip  = "http://10.80.0.168:3000/";

export const getProducts = () => dispatch => {
    try {
        axios.get(`http://10.80.0.168:3000/item`)
        .then(response => {
            dispatch({
                type:GET_PRODUCTS,
                payload:response,
            })
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type:GET_PRODUCTS,
            payload:err,
        })
    }
}

export const getCategories = () => dispatch => {
    try {
        axios.get(`http://10.80.0.168:3000/itemcategory`)
        .then(response => {
            dispatch({
                type:GET_CATEGORIES,
                payload:response.data,
            })
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type:GET_CATEGORIES,
            payload:err,
        })
    }
}