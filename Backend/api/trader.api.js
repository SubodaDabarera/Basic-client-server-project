import {v4 as uuidv4} from 'uuid'
import {viewCustomers} from "./customer.api.js";

const traders = new Map();
const items = new Map();
const promotions = new Map();


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
    items.set(newItem.id, newItem);
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

