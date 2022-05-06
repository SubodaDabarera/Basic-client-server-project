import React, {useState} from 'react';
import {addItems} from "./api/API_Trader";

const AddItem = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        console.log(name, price, quantity, description);
        const tempObj = {name, price, quantity, description};

        await addItems(tempObj)
            .then(() => console.log("success"))
            .catch(err => console.log(err))

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
                <input placeholder="Input Description..."
                       onChange={(e) => setDescription(e.target.value)}
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
export default AddItem;