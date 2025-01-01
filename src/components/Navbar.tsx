import { useState } from "react";
import { useUser } from "../assets/theme/scripts/UserContext";
import logo from "../assets/theme/images/logo.png";
import '../styles/base.scss'
import '../styles/buttons.scss'
import '../styles/components.scss'
import '../styles/navigation.scss'
import '../styles/main.scss'
import '../styles/utilities.scss'
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {


const navigate = useNavigate();
const { setUser , user }=useUser();
const [menuOpen, setMenuOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

const toggleMenu = () => {
setMenuOpen(!menuOpen);
};

const confirmLogout = () => {
setIsModalOpen(true);

};

const handleLogout = () => {
setUser(null); // Clear user from context
localStorage.removeItem('user'); // Clear user data from localStorage
setIsModalOpen(false); // Close modal
navigate('/signin');  
};

return (
<header className="header">
  <nav className="navbar container">
    {/* Logo */}
    <div className="order-0">
      <a href="/">
        <img src={logo} height="30" width="147" alt="logo" />
      </a>
    </div>

    {/* Navbar toggler */}
    <button onClick={toggleMenu} className={`order-1 flex cursor-pointer items-center lg:order-1 lg:hidden ${ menuOpen
      ? "hidden" : "block" }`} aria-label="Menu Open">
      <svg className="h-6 fill-current" viewBox="0 0 20 20">
        <title>Menu Open</title>
        <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
      </svg>
    </button>

    <button onClick={toggleMenu} className={`order-2 lg:hidden cursor-pointer items-center lg:order-1 ${ menuOpen
      ? "block" : "hidden" }`} aria-label="Menu Close">
      <svg className="h-6 fill-current" viewBox="0 0 20 20">

        <title>Menu Close</title>
        <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)">
        </polygon>
      </svg>
    </button>

    {/* Navigation Menu */}
    <ul className={`navbar-nav order-2 w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto
      lg:justify-center lg:space-x-5 ${ menuOpen ? "block" : "hidden" }`}>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="/community" className="nav-link">
          Community
        </a>
      </li>
      <li className="nav-item">
        <a href="/features" className="nav-link">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          B&L
        </a>
      </li>
      <li className="nav-item nav-dropdown group relative">
        <span className="nav-link inline-flex items-center">
          NP Hard Problems
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
        <ul
          className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
          <li className="nav-dropdown-item">
            <a href="career.html" className="nav-dropdown-link">
              Career
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a href="career-single.html" className="nav-dropdown-link">
              Career Single
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a href="integrations.html" className="nav-dropdown-link">
              Integrations
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a href="integration-single.html" className="nav-dropdown-link">
              Integration Single
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a href="pricing.html" className="nav-dropdown-link">
              Pricing
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a href="changelogs.html" className="nav-dropdown-link">
              Changelogs
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a href="terms-conditions.html" className="nav-dropdown-link">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </li>
      <li className="nav-item mt-3.5 lg:hidden">
        <a className="btn btn-white btn-sm border-border" href="/signup">
          Sign Up Now
        </a>
      </li>
    </ul>
    <ul className={`navbar-nav order-3 w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-0 lg:flex-auto lg:justify-center
      lg:space-x-5 ${ menuOpen ? "block" : "hidden" }`}>
      {/* WEB */}
      {/* <li className="nav-item nav-dropdown group relative">
        <span className="nav-link inline-flex items-center">
          NP Hard Problems
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
        <ul
          className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
          <li className="nav-dropdown-item">
            <a href="career.html" className="nav-dropdown-link">
              Career
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a href="career-single.html" className="nav-dropdown-link">
              Career Single
            </a>
          </li> */}

          {user ? (
          <li>
            <div className="user-profile">
              
              <ul>
                <li className="nav-item nav-dropdown group relative">
                  <span className="nav-link inline-flex items-center">
                    <span className='username'>
                    {user.name}
                    </span>
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>

                  <ul
                    className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                     <li className="nav-dropdown-item">
                      <a href="/profile" className="nav-dropdown-link">
                        Profile
                      </a>
                    </li>
                    <li className="nav-dropdown-item">
                      <a className="nav-dropdown-link">
                        <button onClick={confirmLogout}>Logout</button>
                      </a></li>
                   
                  </ul>
                </li>
              </ul>
              <a href="/profile"><img
                  src={user.profilepic|| "src/assets/theme/images/shape.svg"}
                  alt="Profile" className="profile-pic" /></a>

            </div>
          </li>

          ) : <></>}

        </ul>

        {/* Logout Confirmation Modal */}
        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to log out?</p>
            <div className="modal-actions">
              <button className="btn btn-outline-primary" onClick={handleLogout}>
                Yes
              </button>
              <button className="btn btn-primary" onClick={()=> setIsModalOpen(false)}>
                No
              </button>
            </div>
          </div>
        </div>
        )}

        {/* Call to Action */}
        <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
          {!user && (
          <a className="btn btn-white btn-sm" href="/signin">
            Sign In Now
          </a>
          )}
        </div>
  </nav>
</header>
);
};

export default Navbar;