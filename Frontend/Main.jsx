import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WelcomePage from './WelcomePage'
import CustomerRegistration from "./customer/CustomerRegistration";
import ViewItems from "./customer/ViewItems";
import ViewCart from "./customer/ViewCart";
import ViewWishlist from "./customer/ViewWishlist";
import PurchaseHistory from "./customer/PurchaseHistory";

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
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Main;