import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WelcomePage from './WelcomePage'
import CustomerRegistration from "./customer/CustomerRegistration";
import ViewItems from "./customer/ViewItems";
import ViewCart from "./customer/ViewCart";
import ViewWishlist from "./customer/ViewWishlist";
import PurchaseHistory from "./customer/PurchaseHistory";
import TraderRegistration from "./trader/TraderRegistration";
import AddItem from "./trader/AddItem";
import EditItems from "./trader/EditItems";
import ViewInventory from "./trader/ViewInventory";
import ViewCustomer from "./trader/ViewCustomer";
import AddPromotions from "./trader/AddPromotions";
import ViewPromotions from "./trader/ViewPromotions";

const Main = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<WelcomePage/>} />

                    <Route path = "/customer" element = {<CustomerRegistration/>} />
                    <Route path= "/customer/viewItems" element = {<ViewItems/>} />
                    <Route path = "/customer/viewCart" element = {<ViewCart/>} />
                    <Route path = "/customer/viewWishlist" element = {<ViewWishlist/>} />
                    <Route path = "/customer/purchaseHistory" element = {<PurchaseHistory/>} />

                    <Route path = "/trader" element = {<TraderRegistration/>} />
                    <Route path = "/trader/addItems" element = {<AddItem/>} />
                    <Route path = "/trader/addItems/:id" element = {<EditItems/>} />
                    <Route path = "/trader/viewInventory" element = {<ViewInventory/>} />
                    <Route path = "/trader/viewCustomer" element = {<ViewCustomer/>} />
                    <Route path = "/trader/addPromotions" element = {<AddPromotions/>} />
                    <Route path = "/trader/viewPromotions" element = {<ViewPromotions/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Main;