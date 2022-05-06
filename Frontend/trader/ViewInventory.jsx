import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getInvItems} from "./api/API_Trader";
import EditItems from "./EditItems";
import {useNavigate} from "react-router-dom";


// const inventoryArray = [
//     {id: 1, name: "product1", description: "desc1", price: 100, quantity: 12},
//     {id:2, name: "product2", description: "desc2", price: 200, quantity: 22},
//     {id:3, name: "product3", description: "desc3", price: 300, quantity: 5},
//     {id:4, name: "product4", description: "desc4", price: 400, quantity: 8},
//     {id:5, name: "product5", description: "desc5", price: 500, quantity: 17}
// ]

const ViewInventory = () => {

    const navigate = useNavigate();
    const [itemList, setItemList ] = useState([]);
    const [clickedItem, setClickedItem] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await getInvItems(setItemList);
        }
        fetchData().then(() => {
            console.log(itemList)
        }).catch(err => console.log(err.message))

    },[])

    const onEditClicked = (item) => {
        // navigate(`/trader/addItems/${item.id}`)


    }

    return (
        <div style={{margin:20, alignContent:"center"}}>
            <table width="50%" border='1' style={{borderCollapse: "collapse"}} >
                <thead >
                <tr>
                    <th style={{padding:10}}>Product ID</th>
                    <th style={{padding:10}}>Product Name</th>
                    <th style={{padding:10}}>Product Price (Rs.)</th>
                    <th style={{padding:10}}>Quantity</th>
                    <th style={{padding:10}}>Edit items</th>

                </tr>
                </thead>
                <tbody>

                {
                    itemList.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td style={{padding:6}}>{item.id}</td>
                                <td style={{padding:6}}>{item.name}</td>
                                <td style={{padding:6}}>{item.price}</td>
                                <td style={{padding:6}}>{item.quantity}</td>
                                <td style={{padding:6}}>
                                    <button
                                        onClick={() => setClickedItem(item)}
                                    >
                                        Edit
                                    </button>
                                </td>

                            </tr>
                        )

                    })
                }

                </tbody>
            </table>

            <div style={{ width:"fit-content"}}>
                <Link to = "/trader/addItems">
                    <p>Add an item</p>
                </Link>
            </div>
                {/*<Link to = "/trader/addItems">*/}
                {/*    <p>Edit item</p>*/}
                {/*</Link>*/}
            <div style={{ width:"fit-content"}}>
                <Link to = "/trader/viewCustomer">
                    <p>View customer</p>
                </Link>
            </div>
            <div style={{ width:"fit-content"}}>
                <Link to = "/trader/addPromotions">
                    <p>Add promotions</p>
                </Link>
            </div>
            <div style={{ width:"fit-content"}}>
                <Link to = "/trader/viewPromotions">
                    <p>View promotions</p>
                </Link>
            </div>
            {
                clickedItem &&
                <EditItems item = {clickedItem} />
            }

        </div>

    )
}
export default ViewInventory;