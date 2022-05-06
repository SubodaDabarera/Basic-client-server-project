import React, {useEffect, useState} from 'react';
import {getCustomers} from "./api/API_Trader";

const customerArray = [
    {id: 1, name: "user1", email: "user1@gmail.com", password: 100, dob: 2012},
    {id:2, name: "user 2", email: "user2@gmail.com", password: 200, dob: 2022},
    {id:3, name: "user 3", email: "user3@gmail.com", password: 300, dob: 2005},
    {id:4, name: "user 4", email: "user4@gmail.com", password: 400, dob: 2008},
    {id:5, name: "user 5", email: "user5@gmail.com", password: 500, dob: 2017}
]

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