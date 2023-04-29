import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Form = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid text-center mt-5 ">
            <form>
                <div className="mb-3 w-500">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
