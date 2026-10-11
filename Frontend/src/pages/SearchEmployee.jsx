import { useState } from "react";

function SearchEmployee() {

    const [employeeId, setEmployeeId] = useState("");
    const [employee, setEmployee] = useState(null);

    function searchEmployee() {

        // Abhi testing ke liye dummy data
        if (employeeId === "101") {

            setEmployee({
                id: "101",
                name: "Rahul Sharma",
                mobile: "9876543210",
                email: "rahul@gmail.com",
                department: "IT",
                salary: "35000"
            });

        } else {

            alert("Employee not found");
            setEmployee(null);
        }
    }

    return (
        <div className="search-page">

            <div className="search-box">

                <h1>Search Employee</h1>

                <div className="form-row">

                    <label>Employee ID</label>

                    <input
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        placeholder="Enter Employee ID"
                    />

                    <button onClick={searchEmployee}>
                        Search
                    </button>

                </div>

                {employee && (
                    <div className="employee-details">

                        <div className="form-row">
                            <label>Name</label>
                            <input
                                type="text"
                                value={employee.name}
                                readOnly
                            />
                        </div>

                        <div className="form-row">
                            <label>Mobile No.</label>
                            <input
                                type="text"
                                value={employee.mobile}
                                readOnly
                            />
                        </div>

                        <div className="form-row">
                            <label>Email Id</label>
                            <input
                                type="text"
                                value={employee.email}
                                readOnly
                            />
                        </div>

                        <div className="form-row">
                            <label>Department</label>
                            <input
                                type="text"
                                value={employee.department}
                                readOnly
                            />
                        </div>

                        <div className="form-row">
                            <label>Salary</label>
                            <input
                                type="text"
                                value={employee.salary}
                                readOnly
                            />
                        </div>

                    </div>
                )}

                <div className="buttons">

                    <button onClick={() => window.history.back()}>
                        Back
                    </button>

                </div>

            </div>

        </div>
    );
}

export default SearchEmployee;