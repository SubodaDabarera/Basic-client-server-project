import {v4 as uuidv4} from "uuid";
import {viewInventory} from './trader.api.js'


const customers = new Map();
const cart = new Map();
const wishList = new Map();
const purchasedItem = new Map();
const purchaseHistory = new Map();

//create customer
export const createCustomerProfile = ({name, email, password, dob}) => {
    // const customer = {id: uuidv4(), username: username, email: email, password: password, DOB: dob, createdDate: new Date()};
    const customer = {id: uuidv4(), name, email, password, dob, createdDate: new Date()};
    customers.set(customer.id, customer);
    return customer;
}

//view items
export const ViewItems = () => {
    return viewInventory();
}

export const addToCart = ({id, name, price, description, quantity}) => {

    const cItem = {id:uuidv4(),itemId: id, name, price, addedDate: new Date()}
    cart.set(cItem.id, cItem);
    return cart;
}

//add to wishList
export const addToWishList = ({id, name, price}) => {
    const wItem = {id: uuidv4(), itemId: id , name, price, addedDate: new Date()}
    wishList.set(wItem.id, wItem);
    return wItem;
}

//view cart
export const viewCart = () => {
    return [...cart.values()];
}

//view wishList
export const viewWishList = () => {
    return [...wishList.values()];
}

export const makePurchase = ({id, name, price}) => {
    const purchaseOne = {id: uuidv4(), itemId: id , name, price, addedDate: new Date()}
    purchaseHistory.set(purchaseOne.id, purchaseOne);
    return purchaseOne;
}

export const getPurchases = () => {
    return [...purchaseHistory.values()];
}
