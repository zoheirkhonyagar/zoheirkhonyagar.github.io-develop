import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from '../components/menu'

const Header = ({ siteTitle }) => (
<header className="header-container">
	<div className="container">
		<nav>
			<h1 style={{  }}>
				<Link to="/" >
					{siteTitle}
				</Link>
			</h1>
			<Menu />
		</nav>
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
