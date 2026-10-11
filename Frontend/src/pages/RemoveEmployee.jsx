// import React, { useState } from "react";
// import "./RemoveEmployee.css";

// function RemoveEmployee({ onBack }) {

//     const [minimized, setMinimized] = useState(false);
//     const [maximized, setMaximized] = useState(false);

//     const [employeeId, setEmployeeId] = useState("");
//     const [name, setName] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [email, setEmail] = useState("");

//     // Delete Employee
//     const handleDelete = () => {

//         if (employeeId.trim() === "") {
//             alert("Please enter Employee ID");
//             return;
//         }

//         let employees =
//             JSON.parse(localStorage.getItem("employees")) || [];

//         const employee = employees.find(
//             (emp) => String(emp.employeeId) === employeeId.trim()
//         );

//         if (!employee) {
//             alert("Employee not found!");
//             return;
//         }

//         const confirmDelete = window.confirm(
//             "Are you sure you want to delete this employee?"
//         );

//         if (!confirmDelete) {
//             return;
//         }

//         const updatedEmployees = employees.filter(
//             (emp) => String(emp.employeeId) !== employeeId.trim()
//         );

//         localStorage.setItem(
//             "employees",
//             JSON.stringify(updatedEmployees)
//         );

//         alert("Employee deleted successfully!");

//         setEmployeeId("");
//         setName("");
//         setMobile("");
//         setEmail("");
//     };

//     return (
//         <div className="remove-container">

//             {/* ================= MINIMIZED ================= */}

//             {minimized ? (

//                 <div className="minimized-content">

//                     <button
//                         type="button"
//                         className="taskbar-button"
//                         onClick={() => setMinimized(false)}
//                     >
//                         Remove Employee
//                     </button>

//                 </div>

//             ) : (

//                 <div
//                     className={
//                         maximized
//                             ? "remove-window maximized-page"
//                             : "remove-window"
//                     }
//                 >

//              {/* Window Controls */}

// <div className="window-controls">

//     {/* Back */}
//     <button
//         type="button"
//         onClick={onBack}
//         title="Back"
//     >
//         −
//     </button>

//     {/* Maximize / Restore */}
//     <button
//         type="button"
//         onClick={() => setMaximized(!maximized)}
//         title={maximized ? "Restore" : "Maximize"}
//     >
//         {maximized ? "❐" : "□"}
//     </button>

//     {/* Close / Back */}
//     <button
//         type="button"
//         onClick={onBack}
//         title="Close"
//     >
//         ×
//     </button>

// </div>

//                     {/* Heading */}

//                     <h1>Remove Employee</h1>


//                     {/* Form */}

//                     <div className="form">

//                         <div className="field">

//                             <label>Employee ID</label>

//                             <input
//                                 type="text"
//                                 value={employeeId}
//                                 onChange={(e) =>
//                                     setEmployeeId(e.target.value)
//                                 }
//                                 placeholder="Enter Employee ID"
//                             />

//                         </div>


//                         <div className="field">

//                             <label>Name</label>

//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) =>
//                                     setName(e.target.value)
//                                 }
//                                 placeholder="Enter Name"
//                             />

//                         </div>


//                         <div className="field">

//                             <label>Mobile No</label>

//                             <input
//                                 type="text"
//                                 value={mobile}
//                                 onChange={(e) =>
//                                     setMobile(e.target.value)
//                                 }
//                                 placeholder="Enter Mobile No"
//                             />

//                         </div>


//                         <div className="field">

//                             <label>Email Id</label>

//                             <input
//                                 type="text"
//                                 value={email}
//                                 onChange={(e) =>
//                                     setEmail(e.target.value)
//                                 }
//                                 placeholder="Enter Email"
//                             />

//                         </div>


//                         <div className="buttons">

//                             <button
//                                 type="button"
//                                 onClick={handleDelete}
//                             >
//                                 Delete
//                             </button>

//                             <button
//                                 type="button"
//                                 onClick={onBack}
//                             >
//                                 Back
//                             </button>

//                         </div>

//                     </div>

//                 </div>

//             )}

//         </div>
//     );
// }

// export default RemoveEmployee;
import React, { useState } from "react";
import "./RemoveEmployee.css";

function RemoveEmployee({ onBack }) {

    const [minimized, setMinimized] = useState(false);
    const [maximized, setMaximized] = useState(false);

    const [employeeId, setEmployeeId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    // Delete Employee
    const handleDelete = async () => {

        if (employeeId.trim() === "") {
            alert("Please enter Employee ID");
            return;
        }

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const data = new URLSearchParams();

            data.append("employId", employeeId);

            const response = await fetch(
                "http://localhost:8081/EmployeeManagementSystems/removeEmployee",
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

                setEmployeeId("");
                setName("");
                setMobile("");
                setEmail("");

            } else {

                alert(result);
            }

        } catch (error) {

            console.error(error);

            alert("Backend server is not running");
        }
    };

    return (
        <div className="remove-container">

            {/* ================= MINIMIZED ================= */}

            {minimized ? (

                <div className="minimized-content">

                    <button
                        type="button"
                        className="taskbar-button"
                        onClick={() => setMinimized(false)}
                    >
                        Remove Employee
                    </button>

                </div>

            ) : (

                <div
                    className={
                        maximized
                            ? "remove-window maximized-page"
                            : "remove-window"
                    }
                >

                    {/* Window Controls */}

                    <div className="window-controls">

                        {/* Back */}

                        <button
                            type="button"
                            onClick={onBack}
                            title="Back"
                        >
                            −
                        </button>

                        {/* Maximize / Restore */}

                        <button
                            type="button"
                            onClick={() =>
                                setMaximized(!maximized)
                            }
                            title={
                                maximized
                                    ? "Restore"
                                    : "Maximize"
                            }
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

                    {/* Heading */}

                    <h1>Remove Employee</h1>

                    {/* Form */}

                    <div className="form">

                        <div className="field">

                            <label>
                                Employee ID
                            </label>

                            <input
                                type="text"
                                value={employeeId}
                                onChange={(e) =>
                                    setEmployeeId(e.target.value)
                                }
                                placeholder="Enter Employee ID"
                            />

                        </div>


                        <div className="field">

                            <label>
                                Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Enter Name"
                            />

                        </div>


                        <div className="field">

                            <label>
                                Mobile No
                            </label>

                            <input
                                type="text"
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(e.target.value)
                                }
                                placeholder="Enter Mobile No"
                            />

                        </div>


                        <div className="field">

                            <label>
                                Email Id
                            </label>

                            <input
                                type="text"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter Email"
                            />

                        </div>


                        <div className="buttons">

                            <button
                                type="button"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>

                            <button
                                type="button"
                                onClick={onBack}
                            >
                                Back
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default RemoveEmployee;