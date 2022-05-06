import React, {useEffect, useState} from 'react';
import ItemComponent from "./ItemComponent";
import {Link} from "react-router-dom";
import {getAllItems} from "./api/API_Customer";

const ViewItems = () => {

    const [itemList, setItemList ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await getAllItems(setItemList);
        }
        fetchData().then(() => {
            console.log(itemList)
        }).catch(err => console.log(err.message))

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