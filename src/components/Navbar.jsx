import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 transition duration-200 ${
      isActive
        ? "text-yellow-300"
        : "text-white hover:text-yellow-300"
    }`

  return (
    <header className="sticky top-0 z-50 bg-green-700 shadow-md">
      <div className="max-w-7x1 mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vidyasri School Logo"
            className="w-12 h-12 object-contain rounded-full bg-white p-1"
          />
          <div className="leading-tight">
            <h1 className="text-white font-bold text-sm md:text-lg">
              VIDYASRI ENGLISH HIGHER SECONDARY SCHOOL
            </h1>
            <p className="text-yellow-100 text-xs hidden md:block">
              Recognised by Govt of Puducherry
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/admissions" className={navLinkClass}>
            Admissions
          </NavLink>
          <NavLink to="/facilities" className={navLinkClass}>
            Facilities
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4 flex flex-col gap-3">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/admissions" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Admissions
          </NavLink>
          <NavLink to="/facilities" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Facilities
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Navbar