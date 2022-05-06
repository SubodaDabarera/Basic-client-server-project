import React from "react";
import axios from "axios";

export const getAllItems = async (setItemList) => {
    const result = await axios.get("http://localhost:3000/customer")
        .then((response) => setItemList(response.data))
        .catch((err) => console.log(err))
}

export const createUser = async (data) => {
    const sendData = await axios.post("http://localhost:3000/customer", data)
        .then((response) =>console.log(response))
}

export const addToCart = async (data) => {
    const sendData = await axios.post("http://localhost:3000/customer/addCart", data)
        .then((response) =>console.log(response))
}

export const addToWishList = async (data) => {
    const sendData = await axios.post("http://localhost:3000/customer/addWishList", data)
        .then((response) =>console.log(response))
}

export const getCartItems = async (setCartDetails) => {
    const result = await axios.get("http://localhost:3000/customer/viewCart")
        .then((response) => setCartDetails(response.data))
        .catch((err) => console.log(err))
}

export const getWishListItems = async (setWishListDetails) => {
    const result = await axios.get("http://localhost:3000/customer/viewWishList")
        .then((response) => setWishListDetails(response.data))
        .catch((err) => console.log(err))
}

export const getPurchaseHistory = async (setPurchaseDetails) => {
    const result = await axios.get("http://localhost:3000/customer/viewPurchase")
        .then((response) => setPurchaseDetails(response.data))
        .catch((err) => console.log(err))
}

export const purchaseItem = async (data) => {
    const sendData = await axios.post("http://localhost:3000/customer/purchase", data)
        .then((response) =>console.log(response))
}

