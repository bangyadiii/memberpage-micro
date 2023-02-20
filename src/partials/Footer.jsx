import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
    const [email, setEmail] = useState("");

    const url = process.env.APP_MEMBERPAGE_URL ?? "http://localhost:3500";
    function onSubmit(e) {
        e.preventDefault();
        window.open(`${url}/register?email=${email}`);
    }

    return (
        <>
            <div className="flex flex-wrap gap-5 justify-between">
                <div className="w-1/5">
                    <h4 className="mb-4 text-white text-lg">Company</h4>
                    <ul>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline ">
                                    API Developer
                                </a>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline my-2">
                                    Career
                                </a>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline my-2">
                                    Our Story
                                </a>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline my-2">
                                    New Soon
                                </a>
                            </Link>
                        </li>
                        {/* <li className="text-base text-biru-2">New Soon</li> */}
                    </ul>
                </div>
                <div className="w-1/5">
                    <h4 className="mb-4 text-white text-lg">Student</h4>
                    <ul>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline my-2">
                                    Get Scolarship
                                </a>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline my-2">
                                    Our Pathskills
                                </a>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline my-2">
                                    All Features
                                </a>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href={"/"} to="/">
                                <a className="text-base text-biru-2 hover:text-teal-500 hover:underline my-2">
                                    Refund Policy
                                </a>
                            </Link>
                        </li>
                        {/* <li className="text-base text-biru-2">New Soon</li> */}
                    </ul>
                </div>
                <div className="w-1/5">
                    <h4 className="mb-4 text-white text-lg">Touch Us</h4>
                    <ul>
                        <li className="text-base text-biru-2  my-2">
                            Micro Center
                        </li>
                        <li className="text-base text-biru-2  my-2">
                            Alleysi Block X No. 12
                        </li>
                        <li className="text-base text-biru-2 my-2">
                            Jakarta Selatan, Indonesia
                        </li>
                        <li className="text-base text-biru-2 my-2">
                            +21 2020 5555
                        </li>
                    </ul>
                </div>
                <div className="w-auto">
                    <h4 className="mb-4 text-white text-lg">Promotions</h4>
                    <div>
                        <p className="text-base text-biru-2">
                            Submit your email for new updates
                        </p>
                        <form
                            onSubmit={onSubmit}
                            className="email-input mt-3 w-4/5 flex"
                        >
                            <div className="w-64 px-4 pt-2 bg-white">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    id="hero-email-input "
                                    placeholder="Your email address"
                                    className="bg-transparent outline-none"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="w-3/10 sbmit-btn px-6 py-3 bg-orange">
                                <button
                                    type="submit"
                                    className="p-0 m-0 text-white font-medium"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-biru-4 my-7 h-[1px]"></div>
            <h6 className="text-center text-biru-2 text-base">
                2020 Copyright Micro by BuildWith Angga. All Rights Reserved.
            </h6>
        </>
    );
}

export default Footer;
