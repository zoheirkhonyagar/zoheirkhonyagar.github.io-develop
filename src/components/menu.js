import { Link } from 'gatsby'
import React from 'react'

const Menu = () => (
  <ul>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link to="/">About</Link>
    </li>
    <li>
      <Link to="/">Contact</Link>
    </li>
  </ul>
)

export default Menu
