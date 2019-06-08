import React from 'react'
import { Link } from "gatsby"


const NavLinks = () => (
    <>
       <Link to="/faq" className="Link header__link header__link-faq">
          FAQ
        </Link>
        <Link to="/documentation" className="Link header__link">
          Documentation
      </Link>
        <Link to="/post" className="Link header__link">
          Post
      </Link>
    </>
)


export default NavLinks