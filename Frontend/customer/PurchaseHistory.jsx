import React, {useEffect, useState} from 'react';
import {getPurchaseHistory} from "./api/API_Customer";


const PurchaseHistory = () => {

    const [purchaseDetails, setPurchaseDetails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await getPurchaseHistory(setPurchaseDetails);
        }
        fetchData().then(() => {
            console.log(purchaseDetails)
        }).catch(err => console.log(err.message))

    },[])

    return (
        <div style={{margin:20, alignContent:"center"}}>
            <table width="50%" border='1' style={{borderCollapse: "collapse"}} >
                <thead >
                <tr>
                    <th style={{padding:10}}>Product ID</th>
                    <th style={{padding:10}}>Product Name</th>
                    <th style={{padding:10}}>Product Price <br/> (Rs.)</th>
                </tr>
                </thead>
                <tbody>
                {
                    purchaseDetails.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td style={{padding:6}}>{item.id}</td>
                                <td style={{padding:6}}>{item.name}</td>
                                <td style={{padding:6}}>{item.price}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default PurchaseHistory;