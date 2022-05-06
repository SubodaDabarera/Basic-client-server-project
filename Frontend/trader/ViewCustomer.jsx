import React, {useEffect, useState} from 'react';
import {getCustomers} from "./api/API_Trader";

const ViewCustomer = () => {

    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await getCustomers(setCustomerList);
        }
        fetchData().then(() => {
            console.log(customerList)
        }).catch(err => console.log(err.message))
    },[])

    return (
        <div style={{margin:20, alignContent:"center"}}>
            <table width="50%" border='1' style={{borderCollapse: "collapse"}} >
                <thead >
                <tr>
                    <th style={{padding:10}}>Username</th>
                    <th style={{padding:10}}>Email</th>
                    <th style={{padding:10}}>Password</th>
                    <th style={{padding:10}}>DOB</th>
                </tr>
                </thead>
                <tbody>

                {
                    customerList.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td style={{padding:6}}>{item.name}</td>
                                <td style={{padding:6}}>{item.email}</td>
                                <td style={{padding:6}}>{item.password}</td>
                                <td style={{padding:6}}>{item.dob}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}
export default ViewCustomer;