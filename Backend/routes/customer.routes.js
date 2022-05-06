import Router from '@koa/router'
import {
    addToCart,
    addToWishList,
    createCustomerProfile, getPurchases, makePurchase,
    viewCart,
    ViewItems,
    viewWishList
} from "../api/customer.api.js";



const customerRoutes = new Router({
    prefix: '/customer'
})

//create user
customerRoutes.post('/', (ctx) => {
    const data = ctx.request.body;
    ctx.body = createCustomerProfile(data);
    ctx.status = 201;
})

//view all items
customerRoutes.get('/', (ctx) => {
    ctx.body = ViewItems();
})

customerRoutes.post('/addCart', (ctx) => {

    const data = ctx.request.body;
    ctx.body = addToCart(data);
    ctx.status = 201;
})

//add to wishList
customerRoutes.post('/addWishList', (ctx) => {
    //const id = ctx.params.id
    const data = ctx.request.body;
    ctx.body = addToWishList(data);
})

//view cart
customerRoutes.get('/viewCart', (ctx) => {
    ctx.body = viewCart();
})

//view wishList
customerRoutes.get('/viewWishList', (ctx) => {
    ctx.body = viewWishList();
})

//make purchase
customerRoutes.post('/purchase', ctx => {
    const data = ctx.request.body;
    ctx.body = makePurchase(data);
})

//get purchase details
customerRoutes.get('/viewPurchase', ctx => {
    ctx.body = getPurchases();
})

//export
export default customerRoutes;