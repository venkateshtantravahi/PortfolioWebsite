import type React from "react";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full py-6 text-center text-sm bg-[#fdf8f3] text-gray-600 dark:bg-gray-900 dark:text-gray-400 transition-colors duration-300">
        © {year} Venkatesh Tantravahi. All rights reserved.
        </footer>
    );
};

export default Footer;
