import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#d2c8bc] text-white flex justify-between items-center px-4 lg:px-20">
      <p className="text-2xl">
        SKIV
        <span className="italic text-3xl"> atelier</span>
      </p>
      <nav className="">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6  lg:hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <ul className="hidden lg:flex lg:justify-around ">
          <li>
            <a
              href="#about"
              className="pr-20 hover:text-[#786357] cursor-pointer transition duration-300 ease-in-out"
            >
              Про нас
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="pr-20 hover:text-[#786357] cursor-pointer transition duration-300 ease-in-out"
            >
              Послуги
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="pr-20 hover:text-[#786357] cursor-pointer transition duration-300 ease-in-out"
            >
              Контакти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
