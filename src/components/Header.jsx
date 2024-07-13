import React from 'react';

const Header = () => {
    return (
        <section>
            <section className="text-gray-600 bg-blue-100 body-font">
            <div className="container mx-auto flex px-5 py-15 items-center justify-center flex-col">
                <img className="lg:w-1/6 md:w-2/6 sm:w-[0.1] mb-30 object-center rounded-3xl" alt="ramesh" src="assets/ramesh.png" />
                <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ramesh Polubothu</h1>
                <p className="mb-8 text-[20px] leading-relaxed">I am Polubothu Ramesh, a 4th year BTech student in the CSE department at IIT Dharwad. My passion lies in full-stack development and problem-solving, and I am eager to showcase my skills and projects on this website.</p>
                </div>
            </div>
            </section>
        </section>
    );
}

export default Header;
