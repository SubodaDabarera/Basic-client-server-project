import {v4 as uuidv4} from 'uuid'
import {viewCustomers} from "./customer.api.js";

const traders = new Map();
const items = new Map();
const promotions = new Map();
// const customers = new Map();
//
// customers.set("1", {id: 1, name: "user1", email: "user1@gmail.com", password: 100, dob: 2012})
// customers.set("2", {id:2, name: "user 2", email: "user2@gmail.com", password: 200, dob: 2022})
// customers.set("3", {id:3, name: "user 3", email: "user3@gmail.com", password: 300, dob: 2005})
// customers.set("4", {id:4, name: "user 4", email: "user4@gmail.com", password: 400, dob: 2008})
// customers.set("5", {id:5, name: "user 5", email: "user5@gmail.com", password: 500, dob: 2017})

//create trader profile
export const createTraderProfile = ({data}) => {
    const trader = {id: uuidv4(), data , createdDate: new Date()};
    traders.set(trader.id, trader)
    return trader;
}

//add item
export const addItem = ({name, description, price, quantity}) => {
    const item = {id: uuidv4(), name, description, price, quantity , createdDate: new Date()};
    items.set(item.id, item)
    return item;
}

//edit item
export const editItem = ({id, name, description, price, quantity}) => {
    const newItem = {id: id, name, description, price, quantity, editedDate: new Date()};
    items.set(id, newItem);
    return newItem;
}

//get all the items from inventory
export const viewInventory = () => {
    return [...items.values()];
}

//view customers
export const viewCustomer = () => {
    // return [...customers.values()];
    return viewCustomers();
}

//add promotions
export const addPromotion = ({name, price, quantity}) => {
    const promotion = {id: uuidv4(), name, price, quantity , createdDate: new Date()};
    promotions.set(promotion.id, promotion)
    return promotion;
}

//view promotions
export const viewPromotions = () => {
    return [...promotions.values()];
}

