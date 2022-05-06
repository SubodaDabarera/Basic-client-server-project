import React, {useState} from 'react';
import {addItems} from "./api/API_Trader";

const EditItems = (props) => {

    // const itemId = props.params;
    const [id, setId] = useState(props.item.id);
    const [name, setName] = useState(props.item.name);
    const [price, setPrice] = useState(props.item.price);
    const [quantity, setQuantity] = useState(props.item.quantity);
    const [description, setDescription] = useState(props.item.description);

   const handleSubmit = async () => {

       console.log(name, price, quantity, description);
       const tempObj = {id,name, price, quantity, description};

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
                       defaultValue={props.item.name}
                />
                <br/>
                <input placeholder="Input Item Price..."
                       onChange={(e) => setPrice(e.target.value)}
                       style={{margin:4}}
                       defaultValue={props.item.price}
                />
                <br/>
                <input placeholder="Input Quantity..."
                       onChange={(e) => setQuantity(e.target.value)}
                       style={{margin:4}}
                       defaultValue={props.item.quantity}
                />
                <br/>
                <input placeholder="Input Description..."
                       onChange={(e) => setDescription(e.target.value)}
                       style={{margin:4}}
                       defaultValue={props.item.description}
                />
                <br/>

                <button style={{padding:5, margin: 5, backgroundColor:"#96b7eb"}}
                        onClick={() => handleSubmit()}
                >Save Changes</button>
            </center>
        </div>
    )
}
export default EditItems;