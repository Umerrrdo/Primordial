import React from "react";

export default function Navbar() {
    return(
        <>
            <nav className="my-6 ">
                <div className="flex justify-evenly mr-[2rem]">
                    <h1 className="text-white text-3xl font-semibold mr-[8rem]">
                        Primordial
                    </h1>
                    <div>
                        <ul className="flex">
                            <li>
                                <a href="#" class="text-white px-4 text-lg font-medium bg-transparent hover:text-gray-500 transition-all">Home</a>
                            </li>
                            <li>
                                <a href="#" class="text-white px-4 text-lg font-medium bg-transparent hover:text-gray-500 transition-all">Encrypt</a>
                            </li>
                            <li>
                                <a href="#" class="text-white px-4 text-lg font-medium bg-transparent hover:text-gray-500 transition-all">Decrypt</a>
                            </li>
                            <li>
                                <a href="#" class="text-white px-4 text-lg font-medium bg-transparent hover:text-gray-500 transition-all">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )}
