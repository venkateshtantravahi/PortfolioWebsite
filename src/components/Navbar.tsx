import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.theme;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && system)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Blogposts", href: "#blogposts" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 backdrop-blur-md shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Left - Name */}
        <h1 className="text-2xl font-semibold text-black dark:text-white tracking-wide">
          <a href="#home" className="hover:drop-shadow-md">
            Venkatesh Tantravahi
          </a>
        </h1>

        {/* Right - Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-lg font-medium text-gray-800 dark:text-gray-100">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile - Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6 flex flex-col gap-4 text-lg text-gray-800 dark:text-gray-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
