import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <h1>Signup here!</h1>
        </div>
            
    );
};
