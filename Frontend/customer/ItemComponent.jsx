import React, {useEffect, useState} from 'react';
// import {addToCart, addToWishList, purchaseItem} from "./api/API_Customer";

const ItemComponent = (props) => {

    const [item, setItem] = useState(props.item);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [cartItems, setCartItems] = useState(props.item);
    const [wishlistItems, setWishlistItems] = useState(props.item);
    const [purchaseItems, setPurchaseItems] = useState(props.item);


    const onCartAdded = async() => {
        // await addToCart(cartItems)
        //     .then(() => console.log("Success"))
        //     .catch(err => console.log(err))
    }

    const onWishListAdded = async() => {
        // await addToWishList(wishlistItems)
        //     .then(() => console.log("Success"))
        //     .catch(err => console.log(err))
    }
    const onItemPurchase = async() => {
        // await purchaseItem(purchaseItems)
        //     .then(() => console.log("Success"))
        //     .catch(err => console.log(err))
    }






    return (
        <div>
            <div style={{backgroundColor:"#b2c0d6", width: 200, height: 230, margin: 20}}>

                <div style={{padding: 10}}>

                    <p>Name : {item.name}</p>
                    <p>Price : {item.price}</p>
                    <p>Description : {item.description} </p>
                    <p>Quantity : {item.quantity} </p>
                </div>

                <button style={{margin: 3}}
                    onClick={() => onCartAdded()}
                >Add to cart</button>
                <button style={{margin: 3}}
                    onClick={() => onWishListAdded()}
                >Add to Wishlist</button>
                <button style={{margin: 3}}
                        onClick={() => onItemPurchase()}
                >Purchase</button>

            </div>
            
        </div>
    )
}
export default ItemComponent;