import React from "react";
import { Link } from "react-router-dom";

function NavItems({ onLight, item }) {
    const linkColor = onLight ? "text-gray-900" : "text-white";

    return (
        <>
            <Link href="/">
                <a
                    className={`${linkColor} px-6 py-3 text-lg hover:text-teal-500`}
                >
                    {item}
                </a>
            </Link>
        </>
    );
}

export default NavItems;
