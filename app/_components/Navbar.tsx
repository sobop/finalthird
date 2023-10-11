"use client";

import Link from "next/link";
import { MenuOutline } from "react-ionicons";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <nav className="border-solid border-b border-[#D9D9D9]">
      <div className="flex lg:px-8 p-6 items-center justify-between">
        <div className="flex flex-1 text-lg font-semibold">
          <Link href="/">
            <Image src={logo} alt="" className="mx-auto h-10 w-auto" />
          </Link>
        </div>
        <div className="lg:hidden flex">
          <MenuOutline
            color={"#00000"}
            title={"menu"}
            height="28px"
            width="28px"
          />
        </div>
        <div className="lg:flex lg:gap-12 hidden">
          <Link href="/" className="text-lg font-semibold">
            Live
          </Link>
          <Link href="/" className="text-lg font-semibold">
            Premier League
          </Link>
          <Link href="/" className="text-lg font-semibold">
            LaLiga
          </Link>
          <Link href="/" className="text-lg font-semibold">
            Bundesliga
          </Link>
        </div>
        <Link
          href="/signin"
          className="lg:flex-1 lg:justify-end lg:flex hidden text-lg font-semibold"
        >
          로그인
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
