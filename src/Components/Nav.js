import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <div className='nav'>
          <div>
              <p className='profile-name'>Aaron Zakimi</p>
          </div>
        <ul className='nav-links'>
            <li>
                <Link className='links' to='/'>Home</Link>
            </li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Nav;