import Router from "@koa/router";
import {
    addItem,
    addPromotion,
    createTraderProfile,
    editItem,
    viewCustomer,
    viewInventory,
    viewPromotions
} from "../api/trader.api.js";


const traderRoutes = new Router({
    prefix: '/trader'
})

//create profile
traderRoutes.post('/', (ctx) => {
    const data = ctx.request.body;
    ctx.body = createTraderProfile(data);
    ctx.status = 201;
})

//add item
traderRoutes.post('/addItem', (ctx) => {
    const data = ctx.request.body;
    ctx.body = addItem(data);
    ctx.status = 201;
})

//edit item
traderRoutes.put('/editItem', (ctx) => {
    const data = ctx.request.body;
    ctx.body = editItem(data);
})

//view inventory
traderRoutes.get('/inventory', (ctx) => {
    ctx.body = viewInventory();
})

//view customer
traderRoutes.get('/viewCustomer', (ctx) => {
    ctx.body = viewCustomer();
})

//add promotions
traderRoutes.post('/addPromo', (ctx) => {
    const data = ctx.request.body;
    ctx.body = addPromotion(data);
    ctx.status = 201;
})

//view promotions
traderRoutes.get('/viewPromo', (ctx) => {
    ctx.body = viewPromotions();
})

export default traderRoutes;