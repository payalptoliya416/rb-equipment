'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
const buttonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Tracking", path: "/tracking" },
    { name: "FAQ", path: "/faq" },
  ];

  const bgImagePages = [
  "/inventory/inventory-detail",
  "/inventory/inventory-detail/verify-account",
  "/signin",
  "/signin/forgot-password",
  "/signup",
];

useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  function handleClickOutside(e: MouseEvent) {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      !buttonRef.current?.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  }

  function handleEsc(e: KeyboardEvent) {
    if (e.key === "Escape") setIsMenuOpen(false);
  }

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleEsc);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("keydown", handleEsc);
  };
}, [isMenuOpen]);

useEffect(() => {
  setIsMenuOpen(false);
}, [pathname]);

  return (
    <header
  className={`
    w-full z-50 relative 
    ${bgImagePages.includes(pathname)
      ? "bg-[url(/assets/header-bg.png)] bg-no-repeat bg-top"
      : "bg-transparent"
    }
  `}
  style={bgImagePages.includes(pathname) ? { backgroundSize: "100% 100%" } : {}}
>
      <div className="container-custom mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <Link href='/'>
          <Image src="/assets/logo.png" alt="Logo" height={90} width={178}/>
        </Link>

        {/* Desktop & Tablet Navbar */}
        <ul className="hidden lg:flex justify-center items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.path}>
           <Link
              href={item.path}
              className={`
                text-base relative
                after:content-[''] after:absolute after:-bottom-1
                after:left-1/2 after:-translate-x-1/2
                after:h-1 after:w-0
                after:bg-[linear-gradient(180deg,#ff6f6100_0%,#ff6f6119_50%,#ff6f61_100%)]
                after:transition-all after:duration-300
                hover:after:w-8 hover:text-orange transition-all duration-300
                ${
                  item.path === "/"
                    ? pathname === "/"
                      ? "text-orange font-extrabold after:w-8"
                      : "text-gray-700 font-medium"
                    : pathname.startsWith(item.path)
                      ? "text-orange font-extrabold after:w-8"
                      : "text-gray-700 font-medium"
                }
              `}
            >
              {item.name}
            </Link>
            </li>
          ))}
        </ul>

            <Link
          href="/contact-us"
          className="
            hidden lg:block text-green bg-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold
            transition-all duration-300
            hover:bg-orange hover:text-white 
            hover:-translate-y-[2px]
            hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)]
          "
        >
          Contact Us
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
         ref={buttonRef}
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        <HiBars3BottomRight size={36}/>
        </button>
      </div>

      {/* Mobile Menu */}
      <div   ref={menuRef}
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#00796B]/10 backdrop-blur-md absolute top-28 left-0 right-0 w-full p-4 shadow-lg `}
      >
        <ul className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <li key={item.path}>
             <Link
              href={item.path}
              className={`
                text-base relative
                after:content-[''] after:absolute after:-bottom-1
                after:left-1/2 after:-translate-x-1/2
                after:h-1 after:w-0
                after:bg-orange
                after:transition-all after:duration-300
                hover:after:w-8 hover:text-orange transition-all duration-300
                ${
                  item.path === "/"
                    ? pathname === "/"
                      ? "text-orange font-extrabold after:w-8"
                      : "text-gray-700 font-medium"
                    : pathname.startsWith(item.path)
                      ? "text-orange font-extrabold after:w-8"
                      : "text-gray-700 font-medium"
                }
              `}
            >
              {item.name}
            </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button for Mobile */}
      <div className="flex justify-center">
  <Link
    href="/contact-us"
    className="
      text-green bg-white py-3 px-6 rounded-lg font-semibold mt-4 
      transition-all duration-300 
      hover:bg-orange hover:text-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
      hover:-translate-y-1
    "
  >
    Contact Us
  </Link>
</div>

      </div>
    </header>
  );
}

export default Header;
