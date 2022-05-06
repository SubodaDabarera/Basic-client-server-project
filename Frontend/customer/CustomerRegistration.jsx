import React, {useState} from "react";
import {createUser} from "./api/API_Customer";
import {useHistory, useNavigate} from "react-router-dom";

const CustomerRegistration = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");

    const handleSubmit = async() => {
      const tempObj = {name, email, password, dob}

        await createUser(tempObj)
            .then(() => {
                console.log("Success")
                navigate("/customer/viewItems")
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <center>
                <input placeholder="Input Name..."
                    onChange={(e) => setName(e.target.value)}
                    style={{margin:4}}
                       required
                />
                <br/>
                <input placeholder="Input Email..."
                       onChange={(e) => setEmail(e.target.value)}
                       style={{margin:4}}
                       required
                />
                <br/>
                <input placeholder="Input Password..."
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

export default CustomerRegistration;