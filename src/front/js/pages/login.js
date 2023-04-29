import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }
        fetch('https://magdalenapizarroo-congenial-waddle-pvqw74jrqpx3794j-3001.preview.app.github.dev/api/login', opts)
            .then(resp => {
                if (resp.status === 200) return resp.json();
                else alert("There has been an error")
            })
            .then()
            .catch(error => {
                console.error("There was an error!!!!", error);
            })
    }

    return (
        <div className="container-fluid text-center">
            <h1>Login here!</h1>
            <div>
                <input type="text" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <input type="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
            </div>
        </div>

    );
};
