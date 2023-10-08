import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="w-full bg-neutral-200 text-center lg:text-left">
            <div className="px-4 py-2 text-center text-neutral-700">
                Created with ❤️|
                <Link target={"_blank"}
                    className="text-blue-600 hover:underline"
                    href="https://aungpyaephyoe.vercel.app/"
                >  Typle</Link
                >
            </div>
        </footer>
    );
};

export default Footer;
