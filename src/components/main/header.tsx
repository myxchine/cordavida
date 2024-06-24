"use client";

import { useState } from "react";

import { CloseIcon, MenuIcon2, Logo } from "@/components/icons";
import MobileMenu from "@/components/main/menu/Mobile";
import Nav from "@/components/main/menu/Nav";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="w-full sticky top-0 z-10 bg-white/100 backdrop-blur">
      <div className="flex flex-col px-0    sm:px-12 md:px-12 md:p-4 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between relative w-full">
          <div className="p-4 flex justify-between items-center gap-2">
            <Link href="/" aria-label="logo">
              <Logo className="  h-[30px] w-auto flex items-left justify-left" />
            </Link>

            <div className="text-xl font-bold hidden">Cordavida</div>
          </div>

          <div className="mobile flex items-left justify-left md:hidden ">
            {!isOpen && (
              <button
                aria-label="Mobile Menu Open"
                onClick={handleOpen}
                className="flex items-center justify-center p-4"
              >
                <MenuIcon2 className=" text-xl h-[24px] w-[24px] flex items-left justify-left" />
              </button>
            )}

            {isOpen && (
              <button
                aria-label="Mobile Menu Close"
                className="flex items-center justify-center p-4"
                onClick={handleClose}
              >
                <CloseIcon className="p-[3px] text-xl h-[24px] w-[24px] flex items-left justify-left" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between hidden md:flex  ">
            <Nav />
          </div>
        </div>
        {isOpen && <MobileMenu handleClose={handleClose} />}
      </div>
    </header>
  );
};

export default Header;
