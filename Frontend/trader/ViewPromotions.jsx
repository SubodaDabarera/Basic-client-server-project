import React, {useEffect, useState} from 'react';
import {getPromotions} from "./api/API_Trader";

// const promotionsArray = [
//     {id: 1, name: "product1", price: 100, quantity: 12},
//     {id:2, name: "product2", price: 200, quantity: 22},
//     {id:3, name: "product3", price: 300, quantity: 5},
//     {id:4, name: "product4", price: 400, quantity: 8},
//     {id:5, name: "product5", price: 500, quantity: 17}
// ]

const ViewPromotions = () => {

    const [promotionList, setPromotionList ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await getPromotions(setPromotionList);
        }
        fetchData().then(() => {
            console.log(promotionList)
        }).catch(err => console.log(err.message))

    },[])

    return (
        <div style={{margin:20, alignContent:"center"}}>
            <table width="50%" border='1' style={{borderCollapse: "collapse"}} >
                <thead >
                <tr>
                    <th style={{padding:10}}>ID</th>
                    <th style={{padding:10}}>Name</th>
                    <th style={{padding:10}}>Price</th>
                    <th style={{padding:10}}>Quantity</th>
                </tr>
                </thead>
                <tbody>

                {
                    promotionList.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td style={{padding:6}}>{item.id}</td>
                                <td style={{padding:6}}>{item.name}</td>
                                <td style={{padding:6}}>{item.price}</td>
                                <td style={{padding:6}}>{item.quantity}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}
export default ViewPromotions;