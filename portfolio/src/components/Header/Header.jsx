import React from "react";
import {Link, NavLink} from "react-router-dom"


export default function Header(){
    return (
        <>
            <nav className="h-auto p-1.5 text-center text-gray-300 bg-gray-800 flex flex-wrap justify-between items-center">
                <div className="m-2.5 text-2xl">
                <Link to="/" className="hover:underline">
                                        Aaditya Bir Singh
                    </Link>
                </div>
                <div className="m-2.5 " >
                   <ul className="flex flex-wrap justify-between items-center text-gray-300 text-center space-x-8 text-lg">
                   <Link to="/" className="hover:underline">
                                        Home
                    </Link>
                   <Link to="/" className="hover:underline">
                                        About
                    </Link>
                   <Link to="/" className="hover:underline">
                                        Resume
                    </Link>
                   <Link to="/" className="hover:underline">
                                        Contact
                    </Link>
                    
                   </ul>
                </div>
            </nav>
        </>
    )
}