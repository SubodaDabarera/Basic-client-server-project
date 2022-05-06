import React, {useState} from 'react';
import {createTrader} from "./api/API_Trader";
import {useNavigate} from "react-router-dom";

const TraderRegistration = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");

    const handleSubmit = async () => {
        console.log(name, email, password, dob);

        const tempObj = {name, email, password, dob}

        await createTrader(tempObj)
            .then(() => {
                console.log("Success")
                navigate("/trader/viewInventory")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

            <center>
                <input type="text"
                        placeholder="Input Name..."
                       onChange={(e) => setName(e.target.value)}
                       style={{margin:4}}
                />
                <br/>
                <input type="email"
                    placeholder="Input Email..."
                       onChange={(e) => setEmail(e.target.value)}
                       style={{margin:4}}
                />
                <br/>
                <input type="password"
                    placeholder="Input Password..."
                       onChange={(e) => setPassword(e.target.value)}
                       style={{margin:4}}
                />
                <br/>
                <input placeholder="Input DOB..."
                       onChange={(e) => setDob(e.target.value)}
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
export default TraderRegistration;