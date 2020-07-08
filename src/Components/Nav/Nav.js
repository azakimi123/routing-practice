import React, { Component } from 'react';
import './Nav.css';
// import Home from './Home';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <div className='nav'>
        <section className='nav-name'>
          <span>AARON ZAKIMI</span>
        </section>
        <section className='nav-links'>
          <Link to='/' className='links'>
            <span>HOME</span>
          </Link>
          <Link to='/work'  className='links'>
            <span>WORK</span>
          </Link>
          <Link to='/about'  className='links'>
            <span>ABOUT</span>
          </Link>
          <Link to='/contact'  className='links'>
            <span>CONTACT</span>
          </Link>
        </section>
      </div>
    )
  }
}

export default Nav;