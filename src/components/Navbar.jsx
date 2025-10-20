import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo/logo.png" alt="AjiDaik" className="h-20 w-auto" />
          <span className="text-xl font-bold">AjiDaik Solutions</span>
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
              >
                Services
              </NavLink>
            </li>

            {/* 👇 New Reviews Link */}
            <li>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
              >
                Reviews
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
