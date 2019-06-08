import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./header.css"
import NavLinks from  "./navLinks.js"

const Header = ({ siteTitle }) => (
  <header className="header header__main">
    <nav className="nav nav__header">
      <h3>
        <Link className="Link header__link header__link-logo" to="/">
          {siteTitle}
        </Link>
      </h3>
      <div className="nav__header-div">
        <NavLinks />
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Unum`,
}

export default Header
