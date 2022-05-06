import React, {useState} from 'react';
import {addPromotions} from "./api/API_Trader";
import {useNavigate} from "react-router-dom";

const AddPromotions = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = async () => {
        console.log(name, price, quantity);

        const tempObj = {name, price, quantity}

        await addPromotions(tempObj)
            .then(() => console.log("success"))
            .catch(err => console.log(err))

        navigate("/trader/viewInventory")
    }


    return (
        <div>
            <center>
                <input placeholder="Input Item Name..."
                       onChange={(e) => setName(e.target.value)}
                       style={{margin:4}}
                />
                <br/>
                <input placeholder="Input Item Price..."
                       onChange={(e) => setPrice(e.target.value)}
                       style={{margin:4}}
                />
                <br/>
                <input placeholder="Input Quantity..."
                       onChange={(e) => setQuantity(e.target.value)}
                       style={{margin:4}}
                />
                <br/>

                <button style={{padding:5, margin: 5, backgroundColor:"#96b7eb"}}
                        onClick={() => handleSubmit()}
                >Submit data</button>
            </center>
        </div>
    )
}
export default AddPromotions;