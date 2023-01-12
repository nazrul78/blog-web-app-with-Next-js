'use client';

import Link from "next/link";

const Navbar = () => {
    return <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About</Link ></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/about-us">Privacy Policy</Link></li>
        </ul>
    </div>
};

export default Navbar;