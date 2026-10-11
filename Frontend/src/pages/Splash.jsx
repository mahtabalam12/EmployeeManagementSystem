import React from "react";
import "./Splash.css";

function Splash({ onContinue }) {

    return (
        <div className="splash-page">

            <div className="splash-content">

                <h1>Employee Management System</h1>

                <button onClick={onContinue}>
                    CLICK HERE TO CONTINUE
                </button>

            </div>

        </div>
    );
}

export default Splash;































// import React from "react";
// import "./Splash.css";

// function Splash({ onContinue }) {
//     return (
//         <div className="splash-page">

//             <div className="splash-overlay">

//                 <div className="splash-content">

//                     <h1>Employee Management System</h1>

//                     <p>
//                         Manage employee information easily and efficiently
//                     </p>

//                     <button onClick={onContinue}>
//                         Click Here to Continue
//                     </button>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default Splash;