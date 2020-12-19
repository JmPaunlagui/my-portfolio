import React from 'react'
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function Navbar () {
    return (
        <header className = "bg-gray-800">
            <div className = "container mx-auto flex justify-between">
                <nav className = "flex">
                    <NavLink to = "/" 
                    exact
                    activeClassName = "text-white" 
                    className = "inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-white text-4xl font-bold cursive tracking-widest">
                        JM Paunlagui
                    </NavLink>
                    <NavLink to = "/post"
                    activeClassName = "text-white bg-gray-900"
                    className = "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white hover:bg-gray-700">
                        Blog
                    </NavLink>
                    <NavLink to = "/project"
                    activeClassName = "text-white bg-gray-900"  
                    className = "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white hover:bg-gray-700">
                        Project
                    </NavLink>
                    <NavLink to = "/about"
                    activeClassName = "text-white bg-gray-900"
                    className = "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white hover:bg-gray-700">
                        About Me!
                    </NavLink>
                </nav>
                <div className = "inline-flex py-3 px-3 my-6">
                    <SocialIcon url = "https://www.facebook.com/jm.paunlagui" className = "mr-4" target = "_blank" fgColor = "#fff" style = {{ height: 35, width:35}}/>
                    <SocialIcon url = "https://www.instagram.com/jmpaunlagui" className = "mr-4" target = "_blank" fgColor = "#fff" style = {{ height: 35, width:35}}/>
                    <SocialIcon url = "http://twitter.com/realJmPaunlagui" className = "mr-4" target = "_blank" fgColor = "#fff" style = {{ height: 35, width:35}}/>
                    <SocialIcon url = "https://github.com/JmPaunlagui" className = "mr-4" target = "_blank" fgColor = "#fff" style = {{ height: 35, width:35}}/>
                </div>
            </div>
        </header>
    );
}
