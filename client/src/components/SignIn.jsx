import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
export const SignIn = () => {

    const showMessage = (message, type = "success") => {
        if (type === "success") {
            toast.success(message, {
                position: "bottom-right",
            })
        } else {
            toast.error(message, {
                position: "bottom-right",
            })
        }
    }


    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.get(
                `http://localhost:3000/auth/?email=${userData.email}&password=${userData.password}`
            );

            console.log("DATA: ", data);

            if (data) {
                showMessage("Bienvenido " + data.email);
            } 


        } catch (error) {
            console.error("Error fetching data: ", error);
            showMessage(error.response.data, error)
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <form onSubmit={handleSubmit} className="border border-3 p-4 mt-5 rounded">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                onChange={handleChange}
                                name="email"
                                value={userData.email}
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                onChange={handleChange}
                                name="password"
                                value={userData.password}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-3">
                    <ToastContainer autoClose={3000} />

                </div>
            </div>
        </div>
    );
}