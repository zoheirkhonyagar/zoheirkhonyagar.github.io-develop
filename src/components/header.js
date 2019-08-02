import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// import Menu from '../components/menu'

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <div className="container">
      <h1 style={{}}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
