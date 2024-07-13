import React from 'react';

const Navbar = () => {
    return (
        <header className="text-gray-600 bg-blue-100 body-font scroll-smooth">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">
                    <img src="/assets/iitlogo.png" alt="IIT Dharwad Logo" className="w-10 h-10 text-white p-1 bg-indigo-500 rounded-full " />
                    <span className="ml-3 text-xl">IIT Dharwad</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-indigo-500 text-2xl" href="#projects">Projects</a>
                    <a className="mr-5 hover:text-indigo-500 text-2xl" href="#skills">Skills</a>
                    <a className="mr-5 hover:text-indigo-500 text-2xl" href="#contacts">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
