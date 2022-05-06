import React, {useEffect, useState} from 'react';
import {getCartItems} from "./api/API_Customer";


const ViewCart = () => {

    const [cartDetails, setCartDetails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await getCartItems(setCartDetails);
        }
        fetchData().then(() => {
            console.log(cartDetails)
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
                            cartDetails.map((item) => {
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
export default ViewCart;