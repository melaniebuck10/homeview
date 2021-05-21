import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
//import logoimage from './../pictures/getstuffdone.png';

const Navbar = ({ user, onSignOut }) => {
  return (
    <nav className="navbar">
        <div>
            <Link to="/">
              <strong>Home</strong>
            </Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
            </div>
    </nav>
  );
};

export default Navbar;
