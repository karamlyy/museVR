import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Squash as Hamburger } from 'hamburger-react'
// import Logo from '../../assets/images/logo.svg';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <img src={Logo} alt="Logo" /> */}
          MuseVR
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/museums">Museums</NavLink>
            </li>

            <li>
              <NavLink to="/services">Xidmətlər</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar