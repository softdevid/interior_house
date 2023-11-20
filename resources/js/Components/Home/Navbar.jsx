import React, { Fragment, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Menu, Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url } = usePage();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const links = [{ href: "/profil", label: "Tentang Kami" }];

    return (
        <nav className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                <h1 className="text-white text-xl uppercase">Interior House</h1>
            </div>
            <div className="flex items-center space-x-4 lg:hidden">
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!sidebarOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className="hidden lg:block z-50">
                <div className="flex items-baseline space-x-4">
                    <Link
                        href="/"
                        className={
                            url === "/"
                                ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                        }
                        aria-current="page"
                    >
                        Home
                    </Link>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center text-slate-300 hover:text-white hover:bg-slate-600 rounded py-2 px-5 font-bold">
                                Tentang
                                <ArrowDownIcon
                                    className="ml-2 -mr-1 h-5 w-5 "
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-white rounded-md bg-slate-900 shadow-lg ring-1 ring-white ring-opacity-50 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    {links.map((link, index) => (
                                        /* Use the `active` state to conditionally style the active item. */
                                        <Menu.Item key={index} as={Fragment}>
                                            {({ active }) => (
                                                <Link
                                                    href={link.href}
                                                    className={`${
                                                        active
                                                            ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                                            : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                                    }`}
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            {sidebarOpen && (
                <div className="z-50 lg:hidden absolute top-0 left-0 w-64 bg-slate-900 h-full p-4 shadow">
                    <div className="flex items-center mb-4">
                        {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                        <h1 className="text-white text-xl uppercase">
                            Interior House
                        </h1>
                    </div>

                    <div className="h-full  py-4 overflow-y-auto bg-slate-900">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link
                                    href="/"
                                    className={
                                        url === "/"
                                            ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                            : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                >
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center text-slate-300 hover:text-white hover:bg-slate-600 rounded py-2 px-5 font-bold">
                                            Tentang
                                            <ArrowDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 "
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-1 mt-2 w-48 origin-top-right divide-y divide-white rounded-md bg-slate-900 shadow-lg ring-1 ring-white ring-opacity-50 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                {links.map((link, index) => (
                                                    <Menu.Item
                                                        key={index}
                                                        as={Fragment}
                                                    >
                                                        {({ active }) => (
                                                            <Link
                                                                href={link.href}
                                                                className={`${
                                                                    active
                                                                        ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                                                        : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                                                }`}
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}