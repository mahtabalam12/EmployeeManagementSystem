

import React, { useState } from "react";
import "./AddEmployee.css";

function AddEmployee({ onBack }) {

    const [minimized, setMinimized] = useState(false);
    const [maximized, setMaximized] = useState(false);

    const [employee, setEmployee] = useState({
        name: "",
        fatherName: "",
        dob: "",
        salary: "",
        address: "",
        phone: "",
        email: "",
        education: "",
        designation: "",
        aadhaar: ""
    });

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = new URLSearchParams();

            data.append("name", employee.name);
            data.append("fatherName", employee.fatherName);
            data.append("dob", employee.dob);
            data.append("salary", employee.salary);
            data.append("address", employee.address);
            data.append("phone", employee.phone);
            data.append("email", employee.email);
            data.append("education", employee.education);
            data.append("designation", employee.designation);
            data.append("aadhar", employee.aadhaar);

            const response = await fetch(
                "http://localhost:8081/EmployeeManagementSystems/employee",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },

                    body: data.toString()
                }
            );

            const result = await response.text();

            if (response.ok) {

                alert(result);

                setEmployee({
                    name: "",
                    fatherName: "",
                    dob: "",
                    salary: "",
                    address: "",
                    phone: "",
                    email: "",
                    education: "",
                    designation: "",
                    aadhaar: ""
                });

            } else {

                alert(result);
            }

        } catch (error) {

            console.error(error);

            alert("Backend server is not running");
        }
    };

    return (

        <div
            className={
                maximized
                    ? "add-page maximized-page"
                    : "add-page"
            }
        >

            {/* Top Right Window Buttons */}

            {!minimized && (
                <div className="window-controls">

                    {/* Minimize */}

                    <button
                        type="button"
                        onClick={() => setMinimized(true)}
                        title="Minimize"
                    >
                        −
                    </button>

                    {/* Maximize */}

                    <button
                        type="button"
                        onClick={() =>
                            setMaximized(!maximized)
                        }
                        title="Maximize"
                    >
                        {maximized ? "❐" : "□"}
                    </button>

                    {/* Close */}

                    <button
                        type="button"
                        onClick={onBack}
                        title="Close"
                    >
                        ×
                    </button>

                </div>
            )}

            {/* Main Page */}

            {!minimized && (
                <>

                    <h1>New Employee Details</h1>

                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">

                            <div className="form-group">

                                <label>
                                    Employee Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={employee.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Father's Name
                                </label>

                                <input
                                    type="text"
                                    name="fatherName"
                                    value={employee.fatherName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="dob"
                                    value={employee.dob}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Salary
                                </label>

                                <input
                                    type="number"
                                    name="salary"
                                    value={employee.salary}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Address
                                </label>

                                <input
                                    type="text"
                                    name="address"
                                    value={employee.address}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={employee.phone}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Email Id
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={employee.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Highest Education
                                </label>

                                <select
                                    name="education"
                                    value={employee.education}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Education
                                    </option>

                                    <option value="B.Tech">
                                        B.Tech
                                    </option>

                                    <option value="BCA">
                                        BCA
                                    </option>

                                    <option value="BBA">
                                        BBA
                                    </option>

                                    <option value="M.Tech">
                                        M.Tech
                                    </option>

                                    <option value="MCA">
                                        MCA
                                    </option>

                                    <option value="MBA">
                                        MBA
                                    </option>

                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Designation
                                </label>

                                <input
                                    type="text"
                                    name="designation"
                                    value={employee.designation}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Aadhaar No
                                </label>

                                <input
                                    type="text"
                                    name="aadhaar"
                                    value={employee.aadhaar}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-buttons">

                            <button type="submit">
                                Submit
                            </button>

                            <button
                                type="button"
                                onClick={onBack}
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </>
            )}


            {/* Minimized Window */}

            {minimized && (

                <div className="minimized-window">

                    <span>
                        New Employee Details
                    </span>

                    <button
                        type="button"
                        onClick={() => setMinimized(false)}
                    >
                        Restore
                    </button>

                    <button
                        type="button"
                        onClick={onBack}
                    >
                        ×
                    </button>

                </div>

            )}

        </div>
    );
}

export default AddEmployee;
