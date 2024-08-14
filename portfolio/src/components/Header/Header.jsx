import React from "react";
import {Link, NavLink} from "react-router-dom"


export default function Header(){
    return (
        <>
            <nav className="h-auto p-1.5 text-center text-gray-300 bg-gray-800 flex flex-wrap justify-between items-center fixed top-0 left-0 w-full z-40">
                <div className="m-2.5 text-2xl">
                <Link to="/" className="hover:underline">
                                        <span className="text-yellow-500">A</span>aditya <span className="text-yellow-500">B</span>ir <span className="text-yellow-500">S</span>ingh
                    </Link>
                </div>
                <div className="m-2.5 " >
                   <ul className="flex flex-wrap justify-between items-center text-gray-300 text-center space-x-8 text-lg">
                   <Link to="/" className="hover:underline active:text-yellow-500">
                                        Home
                    </Link>
                   <Link to="/" className="hover:underline active:text-yellow-500">
                                        About
                    </Link>
                   <Link to="/" className="hover:underline active:text-yellow-500">
                                        Resume
                    </Link>
                   <Link to="/" className="hover:underline active:text-yellow-500">
                                        Contact
                    </Link>
                    
                   </ul>
                </div>
            </nav>
        </>
    )
}