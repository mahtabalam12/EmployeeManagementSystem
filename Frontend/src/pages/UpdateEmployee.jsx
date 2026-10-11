import React, { useState } from "react";
import "./UpdateEmployee.css";

function UpdateEmployee({ onBack }) {

    const [maximized, setMaximized] = useState(false);

    const [employeeId, setEmployeeId] = useState("");

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

    const [employeeLoaded, setEmployeeLoaded] = useState(false);


    // Fetch Employee
    const searchEmployee = async () => {

        if (employeeId.trim() === "") {

            alert("Please enter Employee ID");
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:8081/EmployeeManagementSystems/updateEmployee?employId=${employeeId}`
            );

            if (!response.ok) {

                alert("Employee not found");
                return;
            }

            const data = await response.json();

            setEmployee({
                name: data.name,
                fatherName: data.fatherName,
                dob: data.dob,
                salary: data.salary,
                address: data.address,
                phone: data.phone,
                email: data.email,
                education: data.education,
                designation: data.designation,
                aadhaar: data.aadhar
            });

            setEmployeeLoaded(true);

        } catch (error) {

            console.error(error);

            alert("Backend server is not running");
        }
    };


    // Handle input changes
    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };


    // Update Employee
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!employeeId) {

            alert("Please enter Employee ID");
            return;
        }

        try {

            const data = new URLSearchParams();

            data.append("employId", employeeId);
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
                "http://localhost:8081/EmployeeManagementSystems/updateEmployee",
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
                    ? "update-page maximized-page"
                    : "update-page"
            }
        >

            {/* TOP RIGHT CONTROLS */}

            <div className="window-controls">

                {/* Back */}

                <button
                    type="button"
                    onClick={onBack}
                    title="Back"
                >
                    −
                </button>


                {/* Maximize */}

                <button
                    type="button"
                    onClick={() => setMaximized(!maximized)}
                    title={maximized ? "Restore" : "Maximize"}
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


            <h1>Update Employee Details</h1>


            {/* EMPLOYEE ID */}

            <div className="form-group">

                <label>Employee ID</label>

                <input
                    type="number"
                    value={employeeId}
                    onChange={(e) =>
                        setEmployeeId(e.target.value)
                    }
                />

                <button
                    type="button"
                    onClick={searchEmployee}
                >
                    Search
                </button>

            </div>


            {/* UPDATE FORM */}

            {employeeLoaded && (

                <form onSubmit={handleSubmit}>

                    <div className="update-grid">


                        {/* Employee Name */}

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


                        {/* Father's Name */}

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


                        {/* Date of Birth */}

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


                        {/* Salary */}

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


                        {/* Address */}

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


                        {/* Phone */}

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


                        {/* Email */}

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


                        {/* Education */}

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


                        {/* Designation */}

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


                        {/* Aadhaar */}

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


                    {/* BUTTONS */}

                    <div className="update-buttons">

                        <button type="submit">
                            Update
                        </button>

                        <button
                            type="button"
                            onClick={onBack}
                        >
                            Back
                        </button>

                    </div>

                </form>

            )}

        </div>
    );
}

export default UpdateEmployee;