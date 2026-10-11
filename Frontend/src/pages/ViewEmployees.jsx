import React, { useEffect, useState } from "react";
import "./ViewEmployee.css";

function ViewEmployee({ onBack, onUpdate }) {

    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState("");
    const [displayEmployees, setDisplayEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch employees from backend
    useEffect(() => {

        fetch(
            "http://localhost:8081/EmployeeManagementSystems/viewEmployees"
        )
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to fetch employees");
                }

                return response.json();
            })
            .then((data) => {

                setEmployees(data);
                setDisplayEmployees(data);
                setLoading(false);

            })
            .catch((error) => {

                console.error(error);

                alert("Unable to load employees");

                setLoading(false);
            });

    }, []);

    // Search employee
    function searchEmployee() {

        if (employeeId.trim() === "") {

            setDisplayEmployees(employees);
            return;
        }

        const result = employees.filter(
            (employee) =>
                employee.employId.toString() === employeeId.trim()
        );

        if (result.length === 0) {

            alert("Employee not found");
            setDisplayEmployees([]);

        } else {

            setDisplayEmployees(result);
        }
    }

    // Print
    function printEmployee() {

        window.print();
    }

    return (

        <div className="view-page">

            <h1>Employee Details</h1>

            {/* Search */}

            <div className="view-search">

                <label>
                    Search By Employee Id
                </label>

                <input
                    type="text"
                    value={employeeId}
                    onChange={(e) =>
                        setEmployeeId(e.target.value)
                    }
                />

            </div>

            {/* Buttons */}

            <div className="view-buttons">

                <button onClick={searchEmployee}>
                    Search
                </button>

                <button onClick={printEmployee}>
                    Print
                </button>

                <button onClick={onUpdate}>
                    Update
                </button>

                <button onClick={onBack}>
                    Back
                </button>

            </div>

            {/* Employee Table */}

            <div className="view-table">

                {loading ? (

                    <p>Loading employees...</p>

                ) : (

                    <table>

                        <thead>

                            <tr>

                                <th>Name</th>
                                <th>Father's Name</th>
                                <th>DOB</th>
                                <th>Salary</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Education</th>
                                <th>Designation</th>
                                <th>Aadhaar</th>
                                <th>Employee ID</th>

                            </tr>

                        </thead>

                        <tbody>

                            {displayEmployees.length > 0 ? (

                                displayEmployees.map((employee) => (

                                    <tr key={employee.employId}>

                                        <td>
                                            {employee.name}
                                        </td>

                                        <td>
                                            {employee.fatherName}
                                        </td>

                                        <td>
                                            {employee.dob}
                                        </td>

                                        <td>
                                            {employee.salary}
                                        </td>

                                        <td>
                                            {employee.address}
                                        </td>

                                        <td>
                                            {employee.phone}
                                        </td>

                                        <td>
                                            {employee.email}
                                        </td>

                                        <td>
                                            {employee.education}
                                        </td>

                                        <td>
                                            {employee.designation}
                                        </td>

                                        <td>
                                            {employee.aadhar}
                                        </td>

                                        <td>
                                            {employee.employId}
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="11">
                                        No Employee Found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                )}

            </div>

        </div>
    );
}

export default ViewEmployee;