import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav className="w-full bg-red-700 h-14 flex justify-between px-4">
      <Link
        to="/"
        className="text-white flex items-center no-underline py-0 pw-4 h-full cursor-pointer"
      >
        Extended Hearts
      </Link>

      <div className="px-4 cursor-pointer md:hidden items-center h-full justify-center flex">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </nav>
  )
}

export default NavBar
