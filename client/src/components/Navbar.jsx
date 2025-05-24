import React from "react";
import "../index.css"; // Make sure this is imported

const Navbar = () => {
    return (
        <nav className="navbar gradient-bg-welcome p-4 flex justify-between items-center">
            <div className="navbar-left flex items-center gap-4">
                {/* Logo */}
                <img src="images/logo.png" alt="Logo" className="navbar-logo h-10 object-contain" />
                <h1 className="navbar-title text-white text-2xl font-bold"></h1>
            </div>
            
            <ul className="navbar-links flex list-none gap-6 items-center">
                <li><a href="#market" className="text-white hover:text-blue-400">Market</a></li>
                <li><a href="#exchange" className="text-white hover:text-blue-400">Exchange</a></li>
                <li><a href="#tutorials" className="text-white hover:text-blue-400">Tutorials</a></li>
                <li><a href="#wallet" className="text-white hover:text-blue-400">Wallet</a></li>
                <li>
                    <button className="login-button bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-400">
                        Login
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
