import React, { useState } from "react";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployees";
import UpdateEmployee from "./pages/UpdateEmployee";
import RemoveEmployee from "./pages/RemoveEmployee";

import "./App.css";

function App() {

    const [page, setPage] = useState("splash");

    return (
        <>

            {/* Splash Page */}
            {page === "splash" && (
                <Splash
                    onContinue={() => setPage("login")}
                />
            )}

            {/* Login Page */}
            {page === "login" && (
                <Login
                    onLogin={() => setPage("dashboard")}
                    onBack={() => setPage("splash")}
                />
            )}

            {/* Dashboard */}
            {page === "dashboard" && (
                <Dashboard
                    onAdd={() => setPage("add")}
                    onView={() => setPage("view")}
                    onUpdate={() => setPage("update")}
                    onRemove={() => setPage("remove")}
                    onLogout={() => setPage("login")}
                />
            )}

            {/* Add Employee */}
            {page === "add" && (
                <AddEmployee
                    onBack={() => setPage("dashboard")}
                />
            )}

            {/* View Employee */}
            {page === "view" && (
                <ViewEmployee
                    onBack={() => setPage("dashboard")}
                    onUpdate={() => setPage("update")}
                />
            )}

            {/* Update Employee */}
            {page === "update" && (
                <UpdateEmployee
                    onBack={() => setPage("dashboard")}
                />
            )}

            {/* Remove Employee */}
            {page === "remove" && (
                <RemoveEmployee
                    onBack={() => setPage("dashboard")}
                />
            )}

        </>
    );
}

export default App;