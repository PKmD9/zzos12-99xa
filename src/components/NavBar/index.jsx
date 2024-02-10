"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    // const [activeLink, setActiveLink] = useState("home"); // Initialize with "home" as default

    // useEffect(() => {
    //     const storedActiveLink = localStorage.getItem("activeLink");
    //     if (storedActiveLink) {
    //         setActiveLink(storedActiveLink);
    //     }
    // }, []);

    // const handleSetActiveLink = (id) => {
    //     localStorage.setItem("activeLink", id);
    //     setActiveLink(id)
    // };

    return (
        <div>
            <nav className="bg-deep-charcoal-default border-b border-deep-charcoal-light">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 ls:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex flex-row">
                                    <Link href="/">
                                        <img alt="Profile" className="block h-10 w-auto rounded-full cursor-pointer" src="https://mondstadt.hydra-bot.xyz/profile/cute.png" />
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="nav_head flex space-x-4">
                                    <Link id="home" className={`nav_link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-deep-charcoal-light hover:text-white flex flex-row gap-2`} href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0 h-5 w-5"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg> Home </Link>
                                    {/* <Link id="recommend" className={`nav_link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-deep-charcoal-light hover:text-white flex flex-row gap-2`} href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0 h-5 w-5"><path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"></path></svg> Recommend </Link> */}
                                    <Link id="popular" className={`nav_link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-deep-charcoal-light hover:text-white flex flex-row gap-2`} href="/popular"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0 h-5 w-5"><path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"></path></svg> Popular </Link>
                                </div>
                            </div>
                        </div>
                        <InputSearch />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

// const [isActive, setIsActive] = useState(true)
// useEffect(() => {
//     const navLink = document.querySelectorAll('.nav_link')
//     navLink.forEach(data => {
//         data.addEventListener('click', () => {
//             document.querySelector('.active')?.classList.remove('active')
//             data.classList.add('active')
//             console.log(data)
//         })
//     })
// })