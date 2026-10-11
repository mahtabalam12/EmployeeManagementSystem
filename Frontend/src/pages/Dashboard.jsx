import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard({
    onAdd,
    onView,
    onSearch,
    onRemove,
    onUpdate,
    onLogout
}) {

    const [maximized, setMaximized] = useState(false);


    // =========================
    // MAXIMIZE / RESTORE
    // =========================

    const handleMaximize = () => {
        setMaximized(!maximized);
    };


    return (
        <div
            className={`dashboard ${
                maximized ? "dashboard-maximized" : ""
            }`}
        >

            {/* =========================
                WINDOW CONTROLS
            ========================= */}

            <div className="dashboard-controls">

                {/* Back / Previous Page */}

                <button
                    type="button"
                    onClick={onLogout}
                    title="Back"
                >
                    −
                </button>


                {/* Maximize / Restore */}

                <button
                    type="button"
                    onClick={handleMaximize}
                    title={maximized ? "Restore" : "Maximize"}
                >
                    {maximized ? "❐" : "□"}
                </button>


                {/* Close */}

                <button
                    type="button"
                    onClick={() => window.close()}
                    title="Close"
                >
                    ×
                </button>

            </div>


             

           

            
            {/* =========================
                HEADING
            ========================= */}

            <h1>
                Employee Management System
            </h1>


            {/* =========================
                MENU
            ========================= */}

            <div className="menu">

                {/* ADD */}

                <button
                    type="button"
                    onClick={onAdd}
                >
                    Add
                </button>


                {/* VIEW */}

                <button
                    type="button"
                    onClick={onView}
                >
                    View
                </button>


                {/* SEARCH */}

                {/*
                <button
                    type="button"
                    onClick={onSearch}
                >
                    Search
                </button>
                */}


                {/* REMOVE */}

                <button
                    type="button"
                    onClick={onRemove}
                >
                    Remove
                </button>


                {/* UPDATE */}

                <button
                    type="button"
                    onClick={onUpdate}
                >
                    Update
                </button>

            </div>

        </div>
    );
}

export default Dashboard;