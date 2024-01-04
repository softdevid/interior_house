
import { AdminContext } from "@/context/admin-context";
import { Dialog, Transition } from "@headlessui/react";
import {
    ComputerDesktopIcon,
    ListBulletIcon,
    NewspaperIcon,
    PhoneIcon,
    PhotoIcon,
    TrophyIcon,
    UserCircleIcon,
    UserGroupIcon,
    UsersIcon,
    VideoCameraIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import React, { Fragment, useContext } from "react";

const Sidebar = () => {
    const context = useContext(AdminContext);
    console.log(context)

    const links = [
        {
            name: "Dashboard",
            href: `/admin/dashboard`,
            icon: ComputerDesktopIcon,
        },
        {
            name: "Profil",
            href: `/admin/profil`,
            icon: UserCircleIcon,
        },
        {
            name: "Layanan",
            href: `/admin/layanan`,
            icon: ListBulletIcon,
        },
        {
            name: "Banner slider",
            href: `/admin/banner`,
            icon: PhotoIcon,
        },
    ];

    return (
        <div className="bg-white">
            <Transition.Root show={context.mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={context.setMobileMenuOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed mt-14 inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <ul className="space-y-2 font-medium p-4">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <link.icon
                                                    aria-hidden="true"
                                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                />
                                                <span className="ml-3">{link.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <link.icon
                                        aria-hidden="true"
                                        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    />
                                    <span className="ml-3">{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
