
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="inline-flex p-1">
      <Link href="/">
        <div className="inline-flex cursor-pointer self-stretch">

          <p className="font-semibold text-4xl self-center">
            M152 Website
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
