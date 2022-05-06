import React, {useEffect, useState} from 'react';
import ItemComponent from "./ItemComponent";
import {Link} from "react-router-dom";
// import {getAllItems} from "./api/API_Customer";

const ViewItems = () => {

    // const itemsArray = [
    //     {id: 1, name: "product1", description: "desc1", price: 100, quantity: 12},
    //     {id:2, name: "product2", description: "desc2", price: 200, quantity: 22},
    //     {id:3, name: "product3", description: "desc3", price: 300, quantity: 5},
    //     {id:4, name: "product4", description: "desc4", price: 400, quantity: 8},
    //     {id:5, name: "product5", description: "desc5", price: 500, quantity: 17}
    // ]

    const [itemList, setItemList ] = useState([]);

    useEffect(() => {
        // async function fetchData() {
        //     await getAllItems(setItemList);
        // }
        // fetchData().then(() => {
        //     console.log(itemList)
        // }).catch(err => console.log(err.message))

    },[])

    return (
        <div>

        <ul>
            <li style={{display:"inline-flex"}}>
                {
                    itemList.map((item, id) => {
                        return (
                            <ItemComponent key={item.id} item = {item}/>
                        )

                    })
                }
            </li>
        </ul>


        <div style={{ width:"fit-content"}}>
            <Link to = "/customer/viewCart">
                <p>View My Cart</p>
            </Link>
        </div >
        <div style={{width:"fit-content"}}>
            <Link to = "/customer/viewWishlist">
                <p>View My WishList</p>
            </Link>
        </div>
        <div style={{width:"fit-content"}}>
            <Link to = "/customer/purchaseHistory">
                <p>View My Purchase History</p>
            </Link>
        </div>













        </div>
    )
}
export default ViewItems;