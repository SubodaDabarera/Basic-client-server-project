import React from 'react';
import axios from "axios";

export const createTrader = async (data) => {
    const sendData = await axios.post("http://localhost:3000/trader/", data)
        .then((response) =>console.log(response))
}

export const addItems = async (data) => {
    const sendData = await axios.post("http://localhost:3000/trader/addItem", data)
        .then((response) =>console.log(response))
}

export const getInvItems = async (setItemList) => {
    const result = await axios.get("http://localhost:3000/trader/inventory")
        .then((response) => setItemList(response.data))
        .catch((err) => console.log(err))
}

export const getCustomers = async (setCustomerList) => {
    const result = await axios.get("http://localhost:3000/trader/viewCustomer")
        .then((response) => setCustomerList(response.data))
        .catch((err) => console.log(err))
}

export const addPromotions = async (data) => {
    const sendData = await axios.post("http://localhost:3000/trader/addPromo", data)
        .then((response) =>console.log(response))
}

export const getPromotions = async (setPromotionList) => {
    const result = await axios.get("http://localhost:3000/trader/viewPromo")
        .then((response) => setPromotionList(response.data))
        .catch((err) => console.log(err))
}