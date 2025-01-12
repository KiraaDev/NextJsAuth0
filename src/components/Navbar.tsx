'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { mainMenu } from '@/config/menu'
import { usePathname } from 'next/navigation';
import Login from './Login';
import { useState } from 'react';

export default function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const { user } = useUser();
    const location = usePathname();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="relative px-4 py-4 flex justify-between items-center w-full">
                <a className="text-3xl font-bold leading-none" href="/">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="50" height="50" viewBox="0 0 500.000000 500.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M2340 4343 c-219 -34 -343 -81 -495 -183 -223 -151 -378 -372 -452
                                -645 -20 -72 -26 -123 -30 -252 l-6 -163 612 0 611 0 0 125 0 125 -450 0
                                c-516 0 -461 -14 -435 108 69 330 306 561 628 612 48 8 122 11 195 7 425 -20
                                713 -288 783 -730 17 -108 7 -309 -22 -417 -65 -253 -216 -443 -433 -546 -237
                                -112 -541 -107 -762 13 -85 47 -217 175 -266 258 l-34 60 -177 3 c-97 1 -177
                                0 -177 -4 0 -14 80 -166 117 -221 48 -74 181 -208 258 -260 417 -282 1000
                                -263 1387 46 161 128 292 316 358 511 59 176 78 436 45 626 -87 495 -467 859
                                -965 924 -73 9 -240 11 -290 3z"/>
                            <path d="M2275 2939 c-38 -5 -104 -18 -145 -29 -93 -25 -250 -89 -250 -102 0
                            -25 67 -133 114 -183 l51 -56 60 21 c224 78 534 71 734 -16 53 -24 53 -24 80
                            -5 37 27 100 96 140 155 39 56 44 48 -74 105 -165 80 -299 111 -500 116 -77 2
                            -171 0 -210 -6z"/>
                            <path d="M1413 2328 c-45 -91 -87 -222 -103 -325 -15 -94 -13 -304 4 -403 69
                            -393 352 -716 741 -846 110 -36 229 -54 368 -54 l117 0 0 605 0 605 -82 0
                            c-46 0 -100 3 -120 6 l-38 7 0 -453 0 -453 -61 7 c-33 4 -91 16 -127 28 -373
                            114 -587 448 -543 850 11 100 47 241 70 278 8 11 -8 33 -67 95 -43 44 -87 93
                            -98 108 l-20 29 -41 -84z"/>
                            <path d="M3365 2274 l-100 -101 18 -43 c56 -127 71 -348 37 -505 -46 -205
                            -178 -387 -346 -476 l-44 -24 0 -178 0 -177 38 15 c249 105 461 327 560 588
                            55 146 75 259 76 427 0 82 -5 177 -13 220 -17 96 -62 233 -98 302 l-28 53
                            -100 -101z"/>
                        </g>
                    </svg>
                    
                </a>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 gap-5 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    {mainMenu.map((menu, index) => (
                        <li key={index} >
                            <a className={menu.to === location ? 'font-bold' : 'text-gray-900 hover:text-gray-500'} href={`${menu.to}`}>{menu.title}</a>
                        </li>
                    ))}
                </ul>

                {
                    user ?
                        <div className='hidden lg:flex lg:ml-auto lg:mr-3 lg:items-center lg:gap-4'>
                            <a href="/api/auth/logout" className='underline text-red-400'>Logout</a>
                            <img src={user.picture || undefined} alt={user.name || undefined} className="rounded-full h-10" />
                        </div>
                        :
                        <>
                            <a className=" hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
                            <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
                        </>
                }

            </nav>
            <div className={`navbar-menu relative z-50 ${isMenuOpen ? 'lg:hidden' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="/">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="50" height="50" viewBox="0 0 500.000000 500.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M2340 4343 c-219 -34 -343 -81 -495 -183 -223 -151 -378 -372 -452
                                -645 -20 -72 -26 -123 -30 -252 l-6 -163 612 0 611 0 0 125 0 125 -450 0
                                c-516 0 -461 -14 -435 108 69 330 306 561 628 612 48 8 122 11 195 7 425 -20
                                713 -288 783 -730 17 -108 7 -309 -22 -417 -65 -253 -216 -443 -433 -546 -237
                                -112 -541 -107 -762 13 -85 47 -217 175 -266 258 l-34 60 -177 3 c-97 1 -177
                                0 -177 -4 0 -14 80 -166 117 -221 48 -74 181 -208 258 -260 417 -282 1000
                                -263 1387 46 161 128 292 316 358 511 59 176 78 436 45 626 -87 495 -467 859
                                -965 924 -73 9 -240 11 -290 3z"/>
                                    <path d="M2275 2939 c-38 -5 -104 -18 -145 -29 -93 -25 -250 -89 -250 -102 0
                            -25 67 -133 114 -183 l51 -56 60 21 c224 78 534 71 734 -16 53 -24 53 -24 80
                            -5 37 27 100 96 140 155 39 56 44 48 -74 105 -165 80 -299 111 -500 116 -77 2
                            -171 0 -210 -6z"/>
                                    <path d="M1413 2328 c-45 -91 -87 -222 -103 -325 -15 -94 -13 -304 4 -403 69
                            -393 352 -716 741 -846 110 -36 229 -54 368 -54 l117 0 0 605 0 605 -82 0
                            c-46 0 -100 3 -120 6 l-38 7 0 -453 0 -453 -61 7 c-33 4 -91 16 -127 28 -373
                            114 -587 448 -543 850 11 100 47 241 70 278 8 11 -8 33 -67 95 -43 44 -87 93
                            -98 108 l-20 29 -41 -84z"/>
                                    <path d="M3365 2274 l-100 -101 18 -43 c56 -127 71 -348 37 -505 -46 -205
                            -178 -387 -346 -476 l-44 -24 0 -178 0 -177 38 15 c249 105 461 327 560 588
                            55 146 75 259 76 427 0 82 -5 177 -13 220 -17 96 -62 233 -98 302 l-28 53
                            -100 -101z"/>
                                </g>
                            </svg>
                        </a>
                        <button
                            onClick={closeMenu}
                            className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        {user ?
                            <p className=' text-center text-xs font-semibold'>{user.email}</p>
                            :
                            <div className=' flex justify-center items-center gap-2'>
                                <a className=" lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
                                <a className=" lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
                            </div>
                        }
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © {new Date().getFullYear()}</span>
                        </p>
                    </div>
                </nav>
            </div>
        </>
    )
}