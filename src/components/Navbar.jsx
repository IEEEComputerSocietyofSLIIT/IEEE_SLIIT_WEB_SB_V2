import React from 'react'
import { Link } from "react-router-dom";
import Logos from '../assets/logos';

export const Navbar = () => {
  return (
    <nav className="w-full bg-gray-200 p-4 shadow">
      <ul className="flex gap-6">
        {/* <li>
          <Link to="/" className="hover:text-blue-500">
            <img src={Logos.IEEE} alt="" />
          </Link>
        </li> */}
        <li>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
