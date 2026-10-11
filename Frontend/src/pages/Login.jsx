import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin, onBack }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [maximized, setMaximized] = useState(false);


    const handleLogin = async (e) => {

        e.preventDefault();

        if (username === "" || password === "") {
            alert("Please enter username and password");
            return;
        }

        try {

            const formData = new URLSearchParams();

            formData.append("username", username);
            formData.append("password", password);


            const response = await fetch(
                "http://localhost:8081/EmployeeManagementSystems/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },

                    body: formData.toString()
                }
            );


            const result = await response.text();


            if (response.ok) {

                alert(result);

                onLogin();

            } else {

                alert(result);
            }


        } catch (error) {

            console.error(error);

            alert("Backend server is not running");
        }
    };


    const handleForgotPassword = () => {

        alert("Forgot Password");
    };


    return (

        <div className="login-page">

            <div
                className={`login-window ${
                    maximized ? "login-maximized" : ""
                }`}
            >

                <div className="login-controls">

                    <button
                        type="button"
                        onClick={onBack}
                        title="Back"
                    >
                        −
                    </button>


                    <button
                        type="button"
                        onClick={() => setMaximized(!maximized)}
                        title={maximized ? "Restore" : "Maximize"}
                    >
                        {maximized ? "❐" : "□"}
                    </button>


                    <button
                        type="button"
                        onClick={onBack}
                        title="Close"
                    >
                        ×
                    </button>

                </div>


                <div className="login-content">


                    <div className="login-form-section">

                        <form onSubmit={handleLogin}>


                            <div className="input-group">

                                <label>Username</label>

                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    placeholder="admin"
                                />

                            </div>


                            <div className="input-group">

                                <label>Password</label>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="•••••"
                                />

                            </div>


                            <button
                                type="submit"
                                className="login-button"
                            >
                                Login
                            </button>


                            <button
                                type="button"
                                className="forgot-password"
                                onClick={handleForgotPassword}
                            >
                                Forgot Password?
                            </button>


                        </form>

                    </div>


                    <div className="login-image-section">

                        <img
                            src="/user.png"
                            alt="Employee"
                        />

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Login;