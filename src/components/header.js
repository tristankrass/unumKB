import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header header__main">
    <nav className="nav nav__header">
      <h1 style={{ margin: 0 }}>
        <Link className="Link header__link header__link-logo" to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="nav__header-div">
        <Link to="/faq" className="Link header__link header__link-faq">
          FAQ
        </Link>
        <Link to="/documentation" className="Link header__link">
          Documentation
      </Link>
        <Link to="/post" className="Link header__link">
          Post
      </Link>
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
