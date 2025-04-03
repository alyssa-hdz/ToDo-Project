import React from "react";
import { Link } from "react-router-dom";

function Layout({children}) 
{
    return (
         <div className="container mt-4">
            <h3 className="text-center mb-4 ">To Do Form</h3>
            <nav class="buttonsnav">
                <Link className="btn btn me-2" to="/"> Home </Link>
                <Link className="btn btn" to="/add"> Add New </Link>
                <Link className="btn btn" to="/contact"> Contact </Link>

            </nav>
            {children}
         </div>   
    )
}

export default Layout;