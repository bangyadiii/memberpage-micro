import React, { useState, useEffect } from "react";
import LogoApp from "../../public/images/logo.svg";
import NavItems from "./NavItems";
import { Link, withRouter } from "react-router-dom";
const navItem = ["Home", "Pricing", "Features", "Story"];

function Navbar({ onLight, location }) {
    const terang = onLight;
    const [user, setUser] = useState(() => null);

    useEffect(() => {
        const userCookies =
            decodeURIComponent(window.document.cookie)
                ?.split(";")
                ?.find?.((item) => item.indexOf("user") > -1)
                ?.split("=")[1] ?? null;
        setUser(userCookies ? JSON.parse(userCookies) : null);
    }, []);

    const linkCTA =
        location.pathname.indexOf("/login") > -1
            ? `${import.meta.env.APP_MEMBERPAGE_URL}/register`
            : `${import.meta.env.APP_MEMBERPAGE_URL}/login`;

    const textCTA =
        location.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

    return (
        <nav className="flex justify-between items-centers">
            <div style={{ height: 54 }}>
                <Link href="/" as={`/`}>
                    <span className="relative">
                        <LogoApp
                            className={`${
                                onLight ? "onLight" : "onDark"
                            } fill-white text-4xl`}
                        />
                        <a className="link-wrapped"></a>
                    </span>
                </Link>
            </div>
            <ul className="flex items-center">
                {navItem.map((value, index) => {
                    return (
                        <li key={index}>
                            <NavItems item={value} onLight={terang} />
                        </li>
                    );
                })}

                <li className="mt-8 md:mt-0">
                    {user ? (
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={linkCTA}
                            className="hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center"
                        >
                            <span className="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                                {user?.thumbnail ? (
                                    <Image
                                        src={user?.thumbnail}
                                        alt={user?.name ?? "Username"}
                                        height={32}
                                        width={32}
                                        className="object-cover w-8 h-8 inline-block"
                                    />
                                ) : (
                                    <DefaultAvatar className="fill-indigo-500 w-8 h-8 inline-block"></DefaultAvatar>
                                )}
                            </span>
                            Hi, {user.name}
                        </a>
                    ) : (
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={linkCTA}
                            className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
                        >
                            {textCTA}
                        </a>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(Navbar);
